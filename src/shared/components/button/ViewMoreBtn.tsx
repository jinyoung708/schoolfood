import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface ViewMoreBtnProps {
  className?: string;
  onClick?: () => void;
}

export const ViewMoreBtn = ({ className, onClick }: ViewMoreBtnProps) => {
  return (
    <button
      className={cn('btn-border-primary btn-icon btn-lg flex items-center gap-[4px]', className)}
      onClick={onClick}
      type="button"
    >
      <span>더보기</span>
      <span>
        <span className="text-secondary">8</span>/20
      </span>
      <Icon src="viewmore.svg" />
    </button>
  );
};
