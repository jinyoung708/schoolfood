/**
 * Component: EventDetail.tsx
 * Description: 진행중인 이벤트 상세 페이지 컴포넌트
 */
import { Comment } from '~/shared/components/comment/Comment';
import { PostContent } from '~/shared/components/post/PostContent';
import { PostSiblings } from '~/shared/components/post/PostSiblings';
import { PostTop } from '~/shared/components/post/PostTop';
import { Subtop } from '~/shared/components/subtop';

export const EventDetail = () => {
  return (
    <div className="container mx-auto pt-[16px] lg:pt-0">
      <Subtop breadcrumb={['HOME', '이벤트', '진행중인 이벤트']} />
      <PostTop
        category="진행중인 이벤트"
        title="새학기 현수막을 잡아라!"
        period={{
          start: '2023.03.01',
          end: '2023.03.31',
          dday: 5,
        }}
        commentCount={10}
      />
      <PostContent className="mt-[30px] lg:mt-[120px]" />
      <div className="flex justify-center items-center flex-wrap gap-[8px] mt-[40px] lg:mt-[120px]">
        <button className="btn-primary btn-lg" type="button">
          이벤트 신청하기
        </button>
        <button className="btn-border-primary btn-lg" type="button">
          신청내역 수정하기
        </button>
        <button className="btn-border-primary btn-lg" type="button">
          신청 취소하기
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
