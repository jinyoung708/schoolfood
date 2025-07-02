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
          leftChildren={
            // <div className="h-[40px] flex items-center"> <- 글쓰기 버튼 있을 경우 사용
            <div className="lg:h-[40px] flex items-center">
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
          // 시안에는 글쓰기 버튼이 있지만 기획 상 글쓰기 버튼이 없어 없는 기준으로 작업함. 글쓰기 버튼이 들어 갈 경우 ListTopContainer의 leftChildren의 자식의 스타일 수정 필요
          // rightChildren={<WriteBtn />}
        />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[60px] mt-[20px] lg:mt-[18px]">
        <NoticeBoard />
        <ComPagination />
      </div>
    </div>
  );
};
