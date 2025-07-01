import { cn } from '~/shared/utils';

interface ListTopContainerProps {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  searchChildren?: React.ReactNode;
}

export const ListTopContainer = ({
  leftChildren,
  searchChildren,
  rightChildren,
}: ListTopContainerProps) => {
  return (
    <div
      className={cn(
        'flex items-end justify-between lg:pt-[0] relative',
        searchChildren && 'pt-[70px]',
      )}
    >
      {leftChildren && <div className="shrink-0">{leftChildren}</div>}
      <div className="flex items-center lg:gap-[16px] shrink-0">
        {searchChildren && (
          <div className="absolute top-0 left-0 right-0 w-full lg:static">{searchChildren}</div>
        )}
        {rightChildren && <div className="shrink-0 flex items-center">{rightChildren}</div>}
      </div>
    </div>
  );
};
