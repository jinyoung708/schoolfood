/**
 * Component: ToggleList.tsx
 * Description: 클릭 시 서브 메뉴를 토글하는 리스트 아이템 컴포넌트
 * Props:
 *  - title: string (토글 가능한 메뉴 제목)
 *  - children: ReactNode (토글 시 보여줄 서브 메뉴 리스트)
 *  - className: string (추가 CSS 클래스명)
 * Usage:
 *  <ToggleList title="메뉴 제목">
 *    <li><Link to="/">3DEPTH</Link></li>
 *  </ToggleList>
 */
import { Button } from '@headlessui/react';
import { useState, useRef, useEffect, ReactNode } from 'react';
import styles from '~/shared/css/Header.module.css';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

type ToggleListProps = {
  title?: string;
  children?: ReactNode;
  className?: string;
  icon?: string;
};

export const ToggleList = ({ title, children, className = '', icon }: ToggleListProps) => {
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.style.maxHeight = open ? `${listRef.current.scrollHeight}px` : '0px';
  }, [open]);

  return (
    <li className={cn(className, open ? styles.active : '')}>
      <Button
        aria-expanded={open}
        aria-controls={`submenu-${title}`}
        onClick={(e) => {
          e.preventDefault();
          setOpen((prev) => !prev);
        }}
      >
        <Icon src={cn(`${icon}_hover.svg`)} className={cn(open ? 'block' : 'hidden')} />
        <Icon src={cn(`${icon}.svg`)} className={cn(open ? 'hidden' : 'block')} />
        {title}
      </Button>
      <ul
        id={`submenu-${title}`}
        ref={listRef}
        className={cn('transition-max-height duration-300 ease-in-out', styles.menuDepth3)}
      >
        {children}
      </ul>
    </li>
  );
};
