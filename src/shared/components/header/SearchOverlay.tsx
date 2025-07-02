/**
 * Component: SearchOverlay.tsx
 * Description: 헤더 내 검색 오버레이 컴포넌트
 */
import { Button, Input } from '@headlessui/react';
import { useState } from 'react';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Header.module.css';
import { Icon } from '../Icon';
import { useHeaderContext } from '~/shared/context/HeaderContext';

export const SearchOverlay = () => {
  const [searchValue, setSearchValue] = useState('');
  const { searchActive, toggleSearch } = useHeaderContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div
      className={cn('relative bg-white', styles.searchOverlay, searchActive ? 'block' : 'hidden')}
    >
      <Button
        className={cn('hidden lg:block cursor-auto', styles.overlayDim)}
        onClick={toggleSearch}
      />
      <div className="max-w-[756px] m-auto">
        <div className={cn(styles.searchForm)}>
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

        <div className={cn(styles.searchKeywords)}>
          <p className={cn(styles.keywordTitle)}>
            최근 검색어 <Button>전체삭제</Button>
          </p>
          <div className={cn(styles.keywordList)}>
            <span className="rounded-full">
              떡갈비
              <Button>
                <span className="blind">삭제</span>
              </Button>
            </span>
            <span className="rounded-full">
              통밀식빵
              <Button>
                <span className="blind">삭제</span>
              </Button>
            </span>
            <span className="rounded-full">
              냉동식품
              <Button>
                <span className="blind">삭제</span>
              </Button>
            </span>
            <span className="rounded-full">
              쭈꾸미볶음
              <Button>
                <span className="blind">삭제</span>
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
