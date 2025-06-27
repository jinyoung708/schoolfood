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
    <div className="flex items-center justify-between pt-[70px] lg:pt-[0] relative">
      {leftChildren && <div className="shrink-0">{leftChildren}</div>}
      <div className="flex items-center lg:gap-[16px] shrink-0">
        {searchChildren && (
          <div className="absolute top-0 left-0 right-0 w-full lg:static">{searchChildren}</div>
        )}
        {rightChildren && <div className="shrink-0 h-[1px] flex items-center">{rightChildren}</div>}
      </div>
    </div>
  );
};
