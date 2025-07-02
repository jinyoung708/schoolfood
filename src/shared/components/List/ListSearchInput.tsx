import { Button, Input } from '@headlessui/react';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface ListSearchInputProps {
  className?: string;
  placeholder?: string;
  value: string;
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ListSearchInput = ({
  className,
  placeholder = '검색어를 입력해주세요.',
  value,
  onClick,
  onChange,
}: ListSearchInputProps) => {
  const handleClear = () => {
    onChange({
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="relative w-full lg:w-[240px]">
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'w-full h-[40px] border border-gray-300 bg-white rounded-full pl-[16px] pr-[50px] placeholder:text-placeholder',
          value && 'pr-[90px]',
          className,
        )}
      />
      {value && (
        <Button
          onClick={handleClear}
          className="absolute right-[56px] top-[50%] translate-y-[-50%]"
        >
          <Icon alt="검색어 삭제" src="delete_listTop.svg" />
        </Button>
      )}
      <Button onClick={onClick} className="absolute right-[16px] top-[50%] translate-y-[-50%]">
        <Icon alt="검색" src="search_listTop.svg" />
      </Button>
    </div>
  );
};
