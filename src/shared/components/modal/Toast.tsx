/**
 * Component: Toast.tsx
 * Description: 토스트 팝업
 * Props:
 *  - open: boolean (토스트 노출 여부)
 *  - desc: ReactNode (표시할 메시지)
 */

import { ReactNode, useEffect, useState } from 'react';
import { cn } from '~/shared/utils';

interface ToastProps {
  open: boolean;
  desc?: ReactNode;
}

export const Toast = ({ open, desc }: ToastProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (open) {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
      }, 2000);
    } else {
      setVisible(false);
    }

    return () => clearTimeout(timer);
  }, [open]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'fixed bottom-[40px] lg:bottom-[80px] left-1/2 -translate-x-1/2 z-[var(--header-z)]',
        'bg-secondary text-white text-sm lg:text-base rounded-[8px] px-[24px] lg:px-[32px] py-[12px] lg:py-[16px]',
        'fade-in-out',
      )}
    >
      {desc}
    </div>
  );
};
