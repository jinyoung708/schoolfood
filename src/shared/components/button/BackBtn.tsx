import { useNavigate } from 'react-router-dom';
import { Button } from '@headlessui/react';
import { Icon } from '~/shared/components/Icon';

interface BackBtnProps {
  ariaLabel?: string;
  className?: string;
}

export const BackBtn = ({ ariaLabel = '뒤로가기', className }: BackBtnProps) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} aria-label={ariaLabel} className={className}>
      <Icon src="back.svg" alt={ariaLabel} />
    </Button>
  );
};
