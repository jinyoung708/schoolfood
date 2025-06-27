import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { Icon } from '~/shared/components/Icon';
import styles from '~/shared/css/Tooltip.module.css';
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

interface TooltipProps {
  title?: string;
  children: React.ReactNode;
}
export const Tooltip = ({ title, children }: TooltipProps) => {
  return (
    <Popover className="relative">
      {({ open }) => {
        return (
          <>
            <PopoverButton>
              <Icon
                src="exclamation_tooltip_16.svg"
                className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]"
              />
            </PopoverButton>
            <PopoverBackdrop className="lg:hidden fixed inset-0 z-[var(--header-z)] bg-black/20" />
            <PopoverPanel
              anchor="bottom"
              className={cn(
                'bg-white lg:border lg:border-primary lg:rounded-[6px] lg:mt-[8px] lg:!overflow-visible z-[var(--header-z)] lg:z-10',
                styles.tooltip,
              )}
            >
              <PopoverContentWrapper isOpen={open}>
                {/* bottom sheet 형태 추후 safe-area 필요 */}
                <div className="flex flex-col fixed lg:relative inset-0 top-auto max-h-[80vh] rounded-tl-[16px] rounded-tr-[16px] lg:rounded-[6px] lg:w-[250px] bg-white overflow-hidden">
                  <div className="py-[14px] px-[20px] lg:p-0 bg-white flex items-center justify-between shrink-0">
                    <span className="lg:hidden font-medium line-clamp-1">{title}</span>
                    <CloseButton className="lg:absolute lg:right-[12px] lg:top-[13px] shrink-0">
                      <Icon src="close_tooltip.svg" alt="닫기" />
                    </CloseButton>
                  </div>
                  <div className="overflow-auto px-[20px] pb-[32px] lg:p-[12px] lg:pr-[36px]">
                    <p className="lg:text-sm">{children}</p>
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
