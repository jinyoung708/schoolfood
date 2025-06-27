/**
 * Component: Modal4.tsx
 * Description: 모달2 팝업 컴포넌트
 * Props:
 *  - title: ReactNode (타이틀)
 *  - children: ReactNode (텍스트)
 */

import { Dialog, DialogPanel, Description, Button } from '@headlessui/react';
import { ReactNode } from 'react';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Modal4.module.css';
import { BackBtn } from '~/shared/components/button/BackBtn';

interface Modal4Props {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
}

export const Modal4 = ({ open, onClose, title, children }: Modal4Props) => {
  return (
    <Dialog open={open} onClose={onClose} className={cn(styles.modalWrap)}>
      <div className={styles.modal}>
        <DialogPanel className={styles.modalContent}>
          {title && (
            <>
              {/* pc */}
              <div className="hidden lg:flex gap-[12px] justify-between items-baseline font-medium pb-[16px] border-b-2 border-gray-800 lg:text-2xl mb-[30px]">
                <div>{title}</div>
                <Button onClick={onClose} className="shrink-0">
                  <Icon src="close_modal.svg" className="w-[16px] lg:w-auto" alt="닫기" />
                </Button>
              </div>
              {/* mo */}
              <div className="flex lg:hidden fixed left-0 top-0 w-full h-[60px] items-center px-[20px]">
                <BackBtn />
                <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-lg font-medium">
                  {title}
                </div>
                <Button onClick={onClose} className="ml-auto">
                  <Icon src="close_mobile.svg" alt="닫기" />
                </Button>
              </div>
            </>
          )}
          {children && (
            <Description as="div" className="">
              {children}
            </Description>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
