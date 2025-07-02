/**
 * Component: Dropdown.tsx
 * Description: 기준 요소(button)를 기준으로 위치를 계산하여 드롭다운 콘텐츠를 표시하는 컴포넌트
 * Props:
 *  - className?: string (컨테이너에 적용할 클래스 이름)
 *  - horizontal?: 'left' | 'right' | 'center' | 'start' | 'end' (수평 위치 기준)
 *  - vertical?: { top?: number | string; bottom?: number | string } (수직 위치 기준)
 * Features:
 *  - 버튼 클릭 시 드롭다운 콘텐츠 표시 및 위치 계산
 *  - 외부 영역 클릭 시 자동으로 드롭다운 닫힘
 *  - DropdownTrigger와 DropdownContent 하위 컴포넌트로 구성
 *  - React Context 기반으로 상태 공유
 *  - 접근성 고려: aria-haspopup, aria-expanded, role="menu" 사용
 * Usage:
 *  <Dropdown horizontal="left" vertical={{ top: 0 }}>
 *    <DropdownTrigger>메뉴</DropdownTrigger>
 *    <DropdownContent>콘텐츠</DropdownContent>
 *  </Dropdown>
 */
import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  createContext,
  useContext,
  useLayoutEffect,
} from 'react';
import { cn } from '~/shared/utils';
import { useClickOutside } from '~/shared/utils/useClickOutside';

interface DropdownContextType {
  open: boolean;
  toggle: () => void;
  close: () => void;
  buttonRef: React.RefObject<HTMLButtonElement>;
  contentRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  dropdownStyle: React.CSSProperties;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

const resolveAnchor = (value: number | string | undefined, base: number): number => {
  if (typeof value === 'string' && value.endsWith('%')) {
    return (parseFloat(value) / 100) * base;
  }
  if (typeof value === 'number') return value;
  return 0;
};

export const Dropdown = ({
  children,
  className,
  horizontal = 'left',
  vertical = { top: 0 },
}: {
  children: React.ReactNode;
  className?: string;
  horizontal?: 'left' | 'right' | 'center' | 'start' | 'end';
  vertical?: { top?: number | string; bottom?: number | string };
}) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useClickOutside(containerRef, close);

  useLayoutEffect(() => {
    if (!open || !buttonRef.current || !contentRef.current || !containerRef.current) return;

    const btnRect = buttonRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    const contentWidth = contentRef.current.offsetWidth;

    const style: React.CSSProperties = {};
    // vertical 위치 설정
    if (vertical.top !== undefined) {
      style.top = btnRect.top - containerRect.top + resolveAnchor(vertical.top, btnRect.height);
    } else if (vertical.bottom !== undefined) {
      style.top =
        btnRect.bottom - containerRect.top - resolveAnchor(vertical.bottom, btnRect.height);
    }

    // horizontal 위치 설정
    switch (horizontal) {
      case 'start':
        style.right = '100%';
        delete style.left;
        break;
      case 'end':
        style.left = '100%';
        delete style.right;
        break;
      case 'left':
        style.left = btnRect.left - containerRect.left;
        delete style.right;
        break;
      case 'right':
        style.left = btnRect.right - containerRect.left - contentWidth;
        delete style.right;
        break;
      case 'center':
        style.left = btnRect.left - containerRect.left + btnRect.width / 2 - contentWidth / 2;
        delete style.right;
        break;
      default:
        style.left = btnRect.left - containerRect.left;
        delete style.right;
    }

    setDropdownStyle(style);
  }, [open, horizontal, vertical]);

  const value = useMemo(
    () => ({
      open,
      toggle,
      close,
      buttonRef,
      contentRef,
      containerRef,
      dropdownStyle,
    }),
    [open, toggle, close, dropdownStyle],
  );

  return (
    <DropdownContext.Provider value={value}>
      <div ref={containerRef} className={cn('relative inline-block', className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownTrigger = ({
  children,
}: {
  children: React.ReactNode | ((open: boolean) => React.ReactNode);
}) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error('DropdownTrigger must be used within Dropdown');

  const { open, toggle, buttonRef } = context;

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggle}
      aria-haspopup="menu"
      aria-expanded={open}
    >
      {typeof children === 'function' ? children(open) : children}
    </button>
  );
};

export const DropdownContent = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error('DropdownContent must be used within Dropdown');

  const { open, contentRef, dropdownStyle } = context;

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      role="menu"
      className="absolute z-[999] whitespace-nowrap"
      style={dropdownStyle}
    >
      {children}
    </div>
  );
};
