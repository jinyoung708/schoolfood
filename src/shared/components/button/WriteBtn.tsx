import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface WriteBtnProps {
  className?: string;
  onClick?: () => void;
}

export const WriteBtn = ({ className, onClick }: WriteBtnProps) => {
  return (
    <button
      className={cn('btn-primary btn-md btn-icon flex items-center gap-[4px]', className)}
      type="button"
      onClick={onClick}
    >
      <Icon src="write.svg" />
      <span>글쓰기</span>
    </button>
  );
};
