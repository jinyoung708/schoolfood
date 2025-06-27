/**
 * Component: Modal1.tsx
 * Description: 모달1 팝업 컴포넌트
 * Props:
 *  - desc: ReactNode (텍스트)
 *  - primaryBtn: string (primary 컬러 버튼)
 *  - whiteBtn: string (white 컬러 버튼)
 */

import { Dialog, DialogPanel, Description, Button } from '@headlessui/react';
import { ReactNode } from 'react';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';

interface Modal1Props {
  open: boolean;
  onClose: () => void;
  desc?: ReactNode;
  primaryBtn?: string;
  whiteBtn?: string;
}

export const Modal1 = ({ open, onClose, desc, primaryBtn, whiteBtn }: Modal1Props) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-[var(--header-z)]">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-[16px] bg-black/40">
        <DialogPanel className="relative max-w-[560px] w-full bg-white p-[20px] lg:p-[40px] rounded-[8px] lg:rounded-[16px]">
          <Button
            onClick={onClose}
            className="absolute right-[20px] lg:right-[40px] top-[26px] lg:top-[46px]"
          >
            <Icon src="close_modal.svg" className="w-[16px] lg:w-auto" alt="닫기" />
          </Button>
          {desc && (
            <Description
              className={cn('text-base lg:text-xl font-medium text-center px-[20px] lg:px-[40px]')}
            >
              {desc}
            </Description>
          )}
          {(primaryBtn || whiteBtn) && (
            <div className="flex gap-[8px] mt-[20px] lg:mt-[30px]">
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
