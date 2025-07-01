import { useNavigate } from 'react-router-dom';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface WriteBtnProps {
  className?: string;
  // onClick?: () => void;
  to?: string;
}

export const WriteBtn = ({ className, to = '' }: WriteBtnProps) => {
  const navigate = useNavigate();

  return (
    <button
      className={cn('btn-primary btn-md btn-icon flex items-center gap-[4px]', className)}
      type="button"
      onClick={() => navigate(to)}
    >
      <Icon src="write.svg" />
      <span>글쓰기</span>
    </button>
  );
};
