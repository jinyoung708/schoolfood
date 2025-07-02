/**
 * Component: SearchBoard.tsx
 * Description: 검색 결과 섹션을 표시하는 컴포넌트
 *
 * Props:
 * - title?: string - 섹션 제목 (예: "상품", "레시피" 등)
 * - children?: ReactNode - 섹션 내부에 렌더링할 검색 결과 콘텐츠
 */
import { ReactNode } from 'react';
import { ViewMoreBtn } from '~/shared/components/button/ViewMoreBtn';

interface SearchBoardProps {
  title?: string;
  children?: ReactNode;
}
export const SearchBoard = ({ title, children }: SearchBoardProps) => {
  return (
    <div>
      <div className="border-b-2 border-gray-800 mb-[20px] lg:mb-[24px] pb-[12px] lg:pb-[24px]">
        {title && <p className="text-lg lg:text-2xl font-medium mb-[20px] lg:mb-[30px]">{title}</p>}
        <p className="text-base lg:text-lg">
          총 <span className="font-semibold text-secondary">N</span>개의 검색결과
        </p>
      </div>
      {children && children}
      <div className="flex justify-center mt-[40px] lg:mt-[80px]">
        <ViewMoreBtn />
      </div>
    </div>
  );
};
