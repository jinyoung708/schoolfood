import { cn } from '~/shared/utils';

interface LineTabProps {
  className?: string;
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const LineTab = ({ className, tabs, activeTab, onTabChange }: LineTabProps) => {
  return (
    <div className="flex items-center border-b border-gray-300 bg-white">
      {tabs.map((tab, index) => (
        <button
          key={tab + index}
          className={cn(
            'flex flex-1 items-center justify-center pb-[13px] lg:pb-[15px] relative',
            activeTab === tab &&
              'after:block after:absolute after:w-full after:h-[2px] after:bg-primary after:-bottom-[1px] after:left-0 after:right-0',
            className,
          )}
          onClick={() => onTabChange(tab)}
          type="button"
        >
          <span
            className={cn(
              'text-sm lg:text-xl font-medium whitespace-nowrap',
              activeTab === tab ? 'text-primary' : 'text-gray-500',
            )}
          >
            {tab}
          </span>
        </button>
      ))}
    </div>
  );
};
