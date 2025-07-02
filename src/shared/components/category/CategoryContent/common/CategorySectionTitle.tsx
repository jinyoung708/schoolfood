import { cn } from '~/shared/utils';
import { Icon } from '../../../Icon';

interface CategorySectionTitleProps {
  hasCopyBtn?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const CategorySectionTitle = ({
  hasCopyBtn,
  children,
  className,
}: CategorySectionTitleProps) => {
  return (
    <div className={cn('flex items-center gap-[4px] lg:gap-[8px]', className)}>
      <p className="text-lg lg:text-2xl font-medium">{children}</p>
      {hasCopyBtn && (
        <button type="button">
          <Icon
            src="copy.svg"
            alt="복사하기"
            className="w-[12px] h-[12px] lg:w-[18px] lg:h-[18px]"
          />
        </button>
      )}
    </div>
  );
};
