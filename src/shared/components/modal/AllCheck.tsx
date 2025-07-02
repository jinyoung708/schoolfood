/**
 * Component: AllCheck
 * Description: 전체상품 필터용 팝오버 컴포넌트
 *
 * Props:
 *  - title?: string (팝오버 상단 제목)
 *  - children: React.ReactNode (팝오버 내 표시할 콘텐츠)
 */

import {
  Button,
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { Icon } from '~/shared/components/Icon';
import { cn } from '~/shared/utils';
import { useScrollLock } from '~/shared/utils/useScrollLock';

const PopoverContentWrapper = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  useScrollLock(isOpen, 'mo');
  return <div>{children}</div>;
};

interface AllCheckProps {
  title?: string;
  children: React.ReactNode;
}
export const AllCheck = ({ title, children }: AllCheckProps) => {
  return (
    <Popover className="relative">
      {({ open }) => {
        return (
          <>
            <PopoverButton className="flex gap-[4px] lg:gap-[8px] text-sm lg:text-base font-medium">
              전체상품
              <Icon src="arrow_down2_gray.svg" className={cn(open ? '-rotate-180' : 'rotate-0')} />
            </PopoverButton>
            <PopoverBackdrop className="lg:hidden fixed inset-0 z-[var(--header-z)] bg-black/40" />
            <PopoverPanel
              anchor="bottom start"
              className={cn(
                'bg-white lg:border lg:border-primary lg:rounded-[16px] lg:mt-[8px] z-[var(--header-z)] lg:z-10',
              )}
            >
              <PopoverContentWrapper isOpen={open}>
                {/* bottom sheet 형태 추후 safe-area 필요 */}
                <div className="flex flex-col fixed lg:relative inset-0 top-auto max-h-[80vh] rounded-tl-[16px] rounded-tr-[16px] lg:w-[432px] pb-[48px] lg:p-[16px] bg-white overflow-hidden">
                  <div className="py-[14px] px-[20px] lg:p-0 bg-white flex items-center justify-between shrink-0">
                    <span className="text-base font-medium lg:mb-[12px]">{title}</span>
                    <CloseButton className="lg:hidden shrink-0">
                      <Icon src="close_tooltip.svg" alt="닫기" />
                    </CloseButton>
                  </div>
                  <div className="px-[20px] lg:px-0 overflow-auto scrollbar-custom">{children}</div>
                  <div className="lg:hidden px-[20px] mt-[32px] shrink-0">
                    <Button className="btn btn-lg btn-primary w-full">적용</Button>
                  </div>
                </div>
              </PopoverContentWrapper>
            </PopoverPanel>
          </>
        );
      }}
    </Popover>
  );
};
