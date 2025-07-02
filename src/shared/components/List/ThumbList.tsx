/**
 * Component: ThumbList.tsx
 * Description: grid를 사용한 썸네일 리스트 컴포넌트
 * Props:
 *  - pcCol: lg 브레이크포인트 이상에서 보여 줄 열 개수 (기본값: 4)
 *  - children: React.ReactNode (리스트 아이템)
 *  - className?: string (추가 클래스 이름)
 * Usage:
 *   <ThumbList pcCol={3}>
 *     <ThumbItem />
 *     <ThumbItem />
 *     <ThumbItem />
 *     <ThumbItem />
 *   </ThumbList>
 */

import { cn } from '~/shared/utils';

interface ThumbListProps {
  pcCol?: 2 | 3 | 4 | 5; // PC에서의 열 개수
  children: React.ReactNode;
  className?: string;
}

export const ThumbList = ({ pcCol = 4, children, className }: ThumbListProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-y-[30px] lg:gap-y-[60px] lg:gap-x-[24px]',
        pcCol === 2 && `lg:grid-cols-2`,
        pcCol === 3 && `lg:grid-cols-3`,
        pcCol === 4 && `lg:grid-cols-4`,
        pcCol === 5 && `lg:grid-cols-5`,
        className,
      )}
    >
      {children}
    </div>
  );
};
