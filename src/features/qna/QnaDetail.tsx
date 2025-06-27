/**
 * Component: QnaDetail.tsx
 * Description: Q&A 상세 페이지 컴포넌트
 */
import { Comment } from '~/shared/components/comment/Comment';
import { PostContent } from '~/shared/components/post/PostContent';
import { PostSiblings } from '~/shared/components/post/PostSiblings';
import { PostTop } from '~/shared/components/post/PostTop';
import { Subtop } from '~/shared/components/subtop';

export const QnaDetail = () => {
  return (
    <div className="container mx-auto pt-[16px] lg:pt-0">
      <Subtop breadcrumb={['HOME', '커뮤니티', 'Q&A']} />
      <PostTop
        category="Q&A"
        title="Q&A 상세 페이지"
        created={{
          by: '사용자1',
          at: '2023-10-01 12:36',
        }}
        commentCount={10}
      />
      <PostContent className="mt-[30px] lg:mt-[120px]" />
      <div className="flex justify-center items-center flex-wrap gap-[8px] mt-[40px] lg:mt-[120px]">
        <button className="btn-border-primary btn-lg" type="button">
          수정
        </button>
        <button className="btn-primary btn-lg" type="button">
          삭제
        </button>
      </div>
      <Comment className="mt-[60px] lg:mt-[120px]" />
      <PostSiblings className="mt-[42px] lg:mt-[80px]" />
      <div className="flex justify-center mt-[60px] lg:mt-[80px]">
        <button className="btn-border-primary btn-xl" type="button">
          목록
        </button>
      </div>
    </div>
  );
};
