import { useMediaQuery } from 'react-responsive';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  return isMobile ? children : null;
};

export const PC = ({ children }: Props) => {
  const isPC = useMediaQuery({ minWidth: 1024 });
  return isPC ? children : null;
};
