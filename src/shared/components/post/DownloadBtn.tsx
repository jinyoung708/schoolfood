import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface DownloadBtnProps {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const DownloadBtn = ({ className, onClick, children }: DownloadBtnProps) => {
  return (
    <button
      className={cn(
        'flex items-center gap-[4px] h-[32px] border border-gray-400 bg-white rounded-[6px] px-[12px]',
        className,
      )}
      type="button"
      onClick={onClick}
    >
      <span className="text-xs text-gray-500 font-medium">{children}</span>
      <Icon src="download.svg" />
    </button>
  );
};
