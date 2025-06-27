import { useRef, useState } from 'react';
import { LineTab } from '../../../tab/LineTab';
import { cn } from '~/shared/utils';
import { useHeaderContext } from '~/shared/context/HeaderContext';
import { ReviewComment } from '../../../comment/ReviewComment';
import { useCategoryScroll } from './hooks/useCategoryScroll';
import { useTabNavigation } from './hooks/useTabNavigation';
import { OFFSETS } from './common/OFFSETS';
import { SectionType } from './common/section.types';
import { CategoryProductInfoSection } from '../CategoryProductInfoSection/CategoryProductInfoSection';
import { SectionWrapper } from './common/SectionWrapper';
import { CategoryRecipeSection } from '../CategoryRecipeSection/CategoryRecipeSection';
import { CategoryVideoSection } from '../CategoryVideoSection/CategoryVideoSection';
import { CategoryRelatedSection } from '../CategoryRelatedSection/CategoryRelatedSection';

interface CategoryContentProps {
  className?: string;
}

export const CategoryContentContainer = ({ className }: CategoryContentProps) => {
  const tabContainerRef = useRef<HTMLDivElement>(null);
  const prdInfoRef = useRef<HTMLDivElement>(null);
  const prdRecipeRef = useRef<HTMLDivElement>(null);
  const prdVideoRef = useRef<HTMLDivElement>(null);
  const prdReviewRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('상품정보');
  const { isHeaderFixed, isCategoryTabFixed, setIsCategoryTabFixed } = useHeaderContext();

  // 1. 섹션 정보 정의
  const sections: SectionType[] = [
    { name: '상품정보', ref: prdInfoRef },
    { name: '활용 레시피', ref: prdRecipeRef },
    { name: '대량 조리 영상(99)', ref: prdVideoRef },
    { name: '사용후기', ref: prdReviewRef },
  ];

  // 2. 탭 클릭 시 해당 섹션으로 스크롤하고 탭 상태를 변경하는 함수
  const handleActiveTabChange = useTabNavigation({
    sections,
    setActiveTab,
  });

  // 3. 스크롤 위치에 따라 activeTab을 업데이트하는 로직
  useCategoryScroll({
    tabContainerRef,
    sections,
    stickyTopPc: OFFSETS.pc.fixed.tabTop,
    stickyTopMobile: OFFSETS.mobile.tabTop,
    scrollOffsetPc: OFFSETS.pc.fixed.scrollOffset,
    scrollOffsetMobile: OFFSETS.mobile.scrollOffset,
    setIsCategoryTabFixed,
    setActiveTab,
    isHeaderFixed,
  });

  return (
    <div className={cn(className)}>
      {/* 이동 탭 */}
      <div
        className={cn(
          `sticky z-10 bg-white top-[${OFFSETS.mobile.tabTop}px] transition-[top] duration-300 pt-[16px] lg:pt-[20px]`,
          isHeaderFixed
            ? `lg:top-[${OFFSETS.pc.fixed.tabTop}px]`
            : `lg:top-[${OFFSETS.pc.notFixed.tabTop}px]`,
          // before element로 헤더와 탭 사이의 유격 가림
          isCategoryTabFixed &&
            '-mx-[16px] lg:mx-0 lg:before:block before:absolute before:bottom-full before:w-full before:h-full before:bg-white',
        )}
        ref={tabContainerRef}
      >
        <LineTab
          tabs={sections.map((s) => s.name)}
          activeTab={activeTab}
          onTabChange={handleActiveTabChange}
        />
      </div>
      {/* 각 섹션 */}
      <div className="flex flex-col gap-[60px] lg:gap-[120px] pt-[40px] lg:pt-[60px]">
        {/* 상품정보 영역 */}
        <SectionWrapper
          ref={prdInfoRef}
          offsetMobile={OFFSETS.mobile.scrollMarginTop}
          offsetPc={OFFSETS.pc.fixed.scrollMarginTop}
        >
          <CategoryProductInfoSection />
        </SectionWrapper>

        {/* 활용 레시피 영역 */}
        <SectionWrapper
          ref={prdRecipeRef}
          offsetMobile={OFFSETS.mobile.scrollMarginTop}
          offsetPc={OFFSETS.pc.fixed.scrollMarginTop}
        >
          <CategoryRecipeSection />
        </SectionWrapper>

        {/* 대량 조리 영상 영역 */}
        <SectionWrapper
          ref={prdVideoRef}
          offsetMobile={OFFSETS.mobile.scrollMarginTop}
          offsetPc={OFFSETS.pc.fixed.scrollMarginTop}
        >
          <CategoryVideoSection />
          {/* 연관 레시피 영역 : 탭으로 이동 가능한 섹션에 포함되지 않음 */}
          <CategoryRelatedSection className="mt-[60px] lg:mt-[120px]" />
        </SectionWrapper>

        {/* 사용후기 영역 */}
        <SectionWrapper
          ref={prdReviewRef}
          offsetMobile={OFFSETS.mobile.scrollMarginTop}
          offsetPc={OFFSETS.pc.fixed.scrollMarginTop}
        >
          <ReviewComment />
        </SectionWrapper>
      </div>
    </div>
  );
};
