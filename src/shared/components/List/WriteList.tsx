/**
 * Component: WriteList.tsx
 * Description: 세로 방향 리스트 컴포넌트 (주로 게시글 리스트 등에 사용)
 * Props:
 *  - children: React.ReactNode (리스트 아이템)
 *  - className?: string (추가 클래스 이름)
 */

import { cn } from '~/shared/utils';

interface WriteListProps {
  children: React.ReactNode;
  className?: string;
}

export const WriteList = ({ children, className }: WriteListProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-[30px] lg:border-t-2 lg:border-gray-800 lg:pt-[24px] lg:pb-[10px] max-w-[756px] mx-auto',
        className,
      )}
    >
      {children}
    </div>
  );
};
