/**
 * Component: MyPosts.tsx
 * Description: 작선한 글 컴포넌트
 */
import { Subtop } from '../../shared/components/subtop';
import { ToggleOption } from '~/shared/components/form/ToggleOption';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ComPagination } from '~/shared/ui/ComPagination';
import { QnaBoard } from '../qna/QnaBoard';
import { Mobile, PC } from '~/shared/components/Responsive';

export const MyPosts = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop
          pageTitle="마이페이지"
          breadcrumb={['HOME', '마이페이지']}
          submenu={['관심상품', '작성한 글', '개인정보 수정']}
        />
        <ListTopContainer
          leftChildren={
            <div className="h-[40px] flex items-center">
              <p className="text-base lg:text-lg">
                <PC>*내가 댓글을 작성한 게시글도 표시됩니다.</PC>
                <Mobile>*내가 댓글을 작성한 글도 표시됩니다.</Mobile>
              </p>
            </div>
          }
          rightChildren={
            <div className="flex items-center gap-[16px]">
              <div className="">
                <ToggleOption sortOptions={['10개씩', 'n개씩']} />
              </div>
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
