import { Icon } from '../components/Icon';
import { cn } from '../utils';

export const ComPagination = () => {
  const buttonClass =
    'w-[32px] lg:w-[40px] h-[32px] lg:h-[40px] flex items-center justify-center text-gray-800 lg:text-lg';
  const activeButtonClass = `${buttonClass} bg-secondary rounded-full text-white font-bold`;
  const disabledButtonClass = `${buttonClass} pointer-events-none`;
  return (
    <div className="flex items-center justify-center gap-[8px] lg:gap-[20px]">
      <button type="button" className={cn(disabledButtonClass)}>
        <Icon src="double_arrow_left_pagination.svg" alt="첫 페이지" />
        <Icon src="double_arrow_left_pagination_gray.svg" alt="첫 페이지" />
      </button>
      <button type="button" className={cn(disabledButtonClass)}>
        <Icon src="arrow_left_pagination.svg" alt="이전 페이지" />
        <Icon src="arrow_left_pagination_gray.svg" alt="이전 페이지" />
      </button>
      <button type="button" className={cn(activeButtonClass)}>
        1
      </button>
      <button type="button" className={cn(buttonClass)}>
        2
      </button>
      <button type="button" className={cn(buttonClass)}>
        3{' '}
      </button>
      <button type="button" className={cn('rotate-180', buttonClass)}>
        <Icon src="arrow_left_pagination.svg" alt="다음 페이지" />
        <Icon src="arrow_left_pagination_gray.svg" alt="다음 페이지" />
      </button>
      <button type="button" className={cn('rotate-180', buttonClass)}>
        <Icon src="double_arrow_left_pagination.svg" alt="마지막 페이지" />
        <Icon src="double_arrow_left_pagination_gray.svg" alt="마지막 페이지" />
      </button>
    </div>
  );
};
