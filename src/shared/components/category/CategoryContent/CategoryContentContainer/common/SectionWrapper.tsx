import React, { forwardRef } from 'react';
import { cn } from '~/shared/utils';

interface SectionWrapperProps {
  offsetMobile: number;
  offsetPc: number;
  children: React.ReactNode;
}

export const SectionWrapper = forwardRef<HTMLDivElement, SectionWrapperProps>(
  ({ offsetMobile, offsetPc, children }, ref) => {
    return (
      <div ref={ref} className={cn(`scroll-mt-[${offsetMobile}px] lg:scroll-mt-[${offsetPc}px]`)}>
        {children}
      </div>
    );
  },
);

SectionWrapper.displayName = 'SectionWrapper';
