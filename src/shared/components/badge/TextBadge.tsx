/**
 * Component: TextBadge.tsx
 * Description: 텍스트 입력형 뱃지 컴포넌트
 * Props:
 *  - children: ReactNode (뱃지 내에 표시될 컨텐츠)
 *  - color?: 'gray' | 'red' (뱃지 색상, 기본값: gray)
 *  - isBold?: boolean (글씨 굵기, 기본값: false, 현재 NEW 뱃지만 isBold 적용)
 * Usage:
 *  <TextBadge color="red" isBold>NEW</TextBadge>
 */

import { cn } from '~/shared/utils';

interface TextBadgeProps {
  children: React.ReactNode;
  color?: 'gray' | 'red';
  isBold?: boolean;
  className?: string;
}

export const TextBadge = ({ children, color = 'gray', isBold, className }: TextBadgeProps) => {
  return (
    <span
      className={cn(
        'h-[18px] lg:h-[26px] flex items-center justify-center rounded-[2px] px-[4px] lg:px-[6px] text-[10px] lg:text-sm',
        color === 'gray' && 'bg-gray-100 text-gray-500',
        color === 'red' && 'bg-point-pink text-white',
        isBold && 'font-bold',
        className,
      )}
    >
      {children}
    </span>
  );
};
