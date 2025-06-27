/**
 * Component: AddProductTooltip.tsx
 * Description: 상품 정보 툴팁 팝업 컴포넌트
 * Props:
 *  - left?: number (툴팁 왼쪽 위치, % 단위)
 *  - top?: number (툴팁 위쪽 위치, % 단위)
 *  - isOpen: boolean (툴팁 열림 상태)
 *  - onToggle: () => void (툴팁 열림/닫힘 토글 함수)
 *  - onClose?: () => void (툴팁 닫기 함수, 선택적)
 *  - deleteBtn?: boolean (삭제 버튼 노출 여부)
 * Usage:
 *  <AddProductTooltip
 *    left={20}
 *    top={40}
 *    isOpen={isOpen}
 *    onToggle={handleToggle}
 *    onClose={handleClose}
 *    deleteBtn
 *  />
 */

import { useRef } from 'react';
import { Button } from '@headlessui/react';
import styles from '~/shared/css/AddProduct.module.css';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';
import { useClickOutside } from '~/shared/utils/useClickOutside';

interface AddProductTooltipProps {
  left?: number;
  top?: number;
  isOpen: boolean;
  onToggle: () => void;
  onClose?: () => void;
  deleteBtn?: boolean;
}

export const AddProductTooltip = ({
  left,
  top,
  isOpen,
  onToggle,
  onClose,
  deleteBtn,
}: AddProductTooltipProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const style: React.CSSProperties = {
    ...(left !== undefined && { left: `${left}%` }),
    ...(top !== undefined && { top: `${top}%` }),
  };

  const getPositionClass = () => {
    let className = '';

    if (left !== undefined) {
      if (left >= 10 && left < 30) className = styles.left;
      else if (left >= 30 && left < 70) className = styles.center;
      else if (left >= 70 && left <= 100) className = styles.right;
    }

    if (top !== undefined && top >= 80 && top <= 100) {
      className += ` ${styles.top}`;
    }

    return className.trim();
  };

  useClickOutside(wrapperRef, () => {
    if (isOpen) onClose?.();
  });

  return (
    <div
      ref={wrapperRef}
      style={style}
      className={cn(
        'absolute text-[0] -translate-x-1/2 -translate-y-1/2',
        styles.btnWrap,
        isOpen && styles.active,
      )}
    >
      {/* 버튼 */}
      <Button onClick={onToggle}>
        <Icon
          src={isOpen ? 'plus_circle_org.svg' : 'plus_circle_white.svg'}
          className="min-w-[24px] w-[24px] lg:min-w-[32px] lg:w-[32px]"
        />
      </Button>

      {/* 툴팁 모달 팝업 */}
      {isOpen && (
        <div className={cn(styles.tooltipWrap, getPositionClass())}>
          <p className={styles.info}>
            <span>단단한 큰 두부</span>
            <span>1팩 152g</span>
          </p>
          {deleteBtn && <Button className="text-base font-medium text-gray-450">삭제</Button>}
        </div>
      )}
    </div>
  );
};
