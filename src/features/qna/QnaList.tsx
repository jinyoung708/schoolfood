/**
 * Component: QnaList.tsx
 * Description: Q&A 목록 페이지 컴포넌트
 */
import { useState } from 'react';
import { ToggleOption } from '~/shared/components/form/ToggleOption';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { Subtop } from '~/shared/components/subtop';
import { QnaBoard } from './QnaBoard';
import { ComPagination } from '~/shared/ui/ComPagination';
import { WriteBtn } from '~/shared/components/button/WriteBtn';

export const QnaList = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop
          pageTitle="Q&A"
          breadcrumb={['HOME', '커뮤니티', 'Q&A']}
          submenu={['Q&A', '튼튼스쿨에 바라는점']}
        />
        <ListTopContainer
          leftChildren={<ListTotalCount count={100} type="post" />}
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
              <WriteBtn />
            </div>
          }
        />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[60px] mt-[20px] lg:mt-[18px]">
        <QnaBoard />
        <ComPagination />
      </div>
    </div>
  );
};
