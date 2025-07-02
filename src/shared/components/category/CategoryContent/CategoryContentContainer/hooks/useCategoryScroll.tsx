import { useEffect, RefObject } from 'react';
import { SectionType } from '../common/section.types';

interface UseCategoryScrollProps {
  tabContainerRef: RefObject<HTMLDivElement>;
  sections: SectionType[];
  stickyTopPc: number;
  stickyTopMobile: number;
  scrollOffsetPc: number;
  scrollOffsetMobile: number;
  setIsCategoryTabFixed?: (val: boolean) => void;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  isHeaderFixed?: boolean;
}

export const useCategoryScroll = ({
  tabContainerRef,
  sections,
  stickyTopPc,
  stickyTopMobile,
  scrollOffsetPc,
  scrollOffsetMobile,
  setIsCategoryTabFixed,
  setActiveTab,
  isHeaderFixed,
}: UseCategoryScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const isPc = window.innerWidth >= 1024;
      const stickyTopValue = isPc ? stickyTopPc : stickyTopMobile;

      if (tabContainerRef.current) {
        const isSticky = tabContainerRef.current.getBoundingClientRect().top <= stickyTopValue + 1;
        setIsCategoryTabFixed?.(isSticky);
      }

      const offset = isPc ? scrollOffsetPc : scrollOffsetMobile;
      const currentScrollY = window.scrollY;

      const currentSection = [...sections]
        .reverse()
        .find(
          (section) =>
            section.ref.current && currentScrollY >= section.ref.current.offsetTop - offset,
        );
      const newActiveTab = currentSection ? currentSection.name : sections[0].name;
      setActiveTab((prev) => (prev === newActiveTab ? prev : newActiveTab));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    tabContainerRef,
    sections,
    stickyTopPc,
    stickyTopMobile,
    scrollOffsetPc,
    scrollOffsetMobile,
    setIsCategoryTabFixed,
    setActiveTab,
    isHeaderFixed,
  ]);
};
