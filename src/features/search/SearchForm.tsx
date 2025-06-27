/**
 * Component: SearchForm.tsx
 * Description: 통합검색 입력 폼 컴포넌트
 */
import { Button, Input } from '@headlessui/react';
import { useState } from 'react';
import { Icon } from '~/shared/components/Icon';
import { cn } from '~/shared/utils';

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div className="mt-[16px] lg:mt-[16px] mb-[40px] lg:mb-[80px]">
      <div className="relative w-full lg:w-[756px] mx-auto">
        <Input
          value={searchValue}
          onChange={handleChange}
          placeholder="검색어를 입력해주세요."
          aria-label="검색어 입력"
          className={cn(
            'w-full h-[48px] lg:h-[68px] lg:font-medium text-base lg:text-2xl border border-gray-300 bg-white rounded-full pl-[16px] lg:pl-[32px] pr-[50px] lg:pr-[84px] placeholder:text-placeholder',
            searchValue && 'pr-[90px] lg:pr-[136px]',
          )}
        />
        {searchValue && (
          <Button
            onClick={handleClear}
            aria-label="검색어 삭제"
            className="absolute right-[56px] lg:right-[84px] top-[50%] translate-y-[-50%]"
          >
            <Icon alt="검색어 삭제" src="delete_listTop.svg" className="w-[24px] lg:w-[32px]" />
          </Button>
        )}
        <Button
          aria-label="검색"
          className="absolute right-[16px] lg:right-[32px] top-[50%] translate-y-[-50%]"
        >
          <Icon alt="검색" src="search_brown.svg" className="w-[24px] lg:w-[32px]" />
        </Button>
      </div>
      <p className="mt-[30px] lg:mt-[60px] text-22 lg:text-34 font-medium text-center">
        <span className="text-secondary">‘떡갈비’</span> 에 대한 검색어로 31건의
        <br className="block lg:hidden" />
        검색 결과가 있습니다
      </p>
    </div>
  );
};
