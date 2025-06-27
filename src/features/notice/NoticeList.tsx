/**
 * Component: NoticeList.tsx
 * Description: 공지사항 목록 페이지 컴포넌트
 */
import { useState } from 'react';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { Subtop } from '~/shared/components/subtop';
import { NoticeBoard } from './NoticeBoard';
import { ComPagination } from '~/shared/ui/ComPagination';
import { WriteBtn } from '~/shared/components/button/WriteBtn';

export const NoticeList = () => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop
          pageTitle="공지사항"
          breadcrumb={['HOME', '커뮤니티', '공지사항']}
          submenu={['공지', 'FAQ']}
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
          rightChildren={<WriteBtn />}
        />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[60px] mt-[20px] lg:mt-[18px]">
        <NoticeBoard />
        <ComPagination />
      </div>
    </div>
  );
};
