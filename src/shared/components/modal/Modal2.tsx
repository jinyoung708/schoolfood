/**
 * Component: Modal2.tsx
 * Description: 모달2 팝업 컴포넌트
 * Props:
 *  - title: ReactNode (타이틀)
 *  - desc: ReactNode (텍스트)
 *  - primaryBtn: string (primary 컬러 버튼)
 *  - whiteBtn: string (white 컬러 버튼)
 *  - noScrollbar: boolean (컨텐츠 스크롤바 없애기)
 *  - mobileBtn: boolean (모바일에서 버튼 세로형 배치)
 */

import { Dialog, DialogPanel, DialogTitle, Description, Button } from '@headlessui/react';
import { ReactNode } from 'react';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';

interface Modal2Props {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  desc?: ReactNode;
  primaryBtn?: string;
  whiteBtn?: string;
  noScrollbar?: boolean;
  mobileBtn?: boolean;
}

export const Modal2 = ({
  open,
  onClose,
  title,
  desc,
  primaryBtn,
  whiteBtn,
  noScrollbar,
  mobileBtn,
}: Modal2Props) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[var(--header-z)]">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-[16px] bg-black/40">
        <DialogPanel className="relative max-w-[560px] w-full bg-white p-[20px] lg:p-[40px] rounded-[8px] lg:rounded-[16px]">
          {title && (
            <DialogTitle
              className={cn(
                'flex gap-[12px] justify-between items-baseline font-medium pb-[16px] border-b-2 border-gray-800 text-xl lg:text-2xl mb-[30px]',
              )}
            >
              <div>{title}</div>
              <Button onClick={onClose} className="shrink-0">
                <Icon src="close_modal.svg" className="w-[16px] lg:w-auto" alt="닫기" />
              </Button>
            </DialogTitle>
          )}
          {desc && (
            <Description
              as="div"
              className={cn(
                'text-base lg:text-xl font-medium text-center',
                noScrollbar ? '' : 'max-h-[calc(100vh-240px)] scrollbar-custom',
              )}
            >
              {desc}
            </Description>
          )}
          {(primaryBtn || whiteBtn) && (
            <div
              className={cn('flex gap-[8px] mt-[30px]', mobileBtn ? 'flex-col lg:flex-row' : '')}
            >
              {whiteBtn && (
                <Button onClick={onClose} className="btn-border-primary btn-lg grow">
                  {whiteBtn}
                </Button>
              )}
              {primaryBtn && (
                <Button onClick={onClose} className="btn-primary btn-lg grow">
                  {primaryBtn}
                </Button>
              )}
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
