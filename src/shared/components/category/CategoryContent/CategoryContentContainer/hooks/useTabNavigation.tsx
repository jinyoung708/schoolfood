import { useCallback } from 'react';
import { SectionType } from '../common/section.types';

interface UseTabNavigationProps {
  sections: SectionType[];
  setActiveTab: (tab: string) => void;
}

export const useTabNavigation = ({ sections, setActiveTab }: UseTabNavigationProps) => {
  return useCallback(
    (tab: string) => {
      const section = sections.find((s) => s.name === tab);
      if (section?.ref.current) {
        section.ref.current.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
      setActiveTab(tab);
    },
    [sections, setActiveTab],
  );
};
