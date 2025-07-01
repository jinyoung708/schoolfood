/**
 * Component: TipList.tsx
 * Description: 상품사용 꿀팁 리스트 페이지 컴포넌트
 */
import { useState } from 'react';
import { ToggleOption } from '~/shared/components/form/ToggleOption';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { Subtop } from '~/shared/components/subtop';
import { TipBoard } from './TipBoard';
import { ComPagination } from '~/shared/ui/ComPagination';
import { WriteBtn } from '~/shared/components/button/WriteBtn';

export const TipList = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop
          pageTitle="상품사용 꿀팁"
          breadcrumb={['HOME', '커뮤니티', '상품사용 꿀팁']}
          submenu={['상품사용 꿀팁', '선생님만의 활용레시피']}
        />
        <ListTopContainer
          leftChildren={
            <div className="h-[40px] flex items-center">
              <ListTotalCount count={100} type="post" />
            </div>
          }
          searchChildren={
            <ListSearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={() => {}}
            />
          }
          rightChildren={
            <div className="flex items-center gap-[16px]">
              <div className="hidden lg:block">
                <ToggleOption sortOptions={['10개씩', 'n개씩']} />
              </div>
              <WriteBtn to="/tip/write" />
            </div>
          }
        />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[60px] mt-[20px] lg:mt-[18px]">
        <TipBoard />
        <ComPagination />
      </div>
    </div>
  );
};
