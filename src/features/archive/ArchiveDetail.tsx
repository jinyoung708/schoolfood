/**
 * Component: ArchiveDetail.tsx
 * Description: 자료실 상세 페이지 컴포넌트
 */
import { TextBadge } from '~/shared/components/badge/TextBadge';
import { Comment } from '~/shared/components/comment/Comment';
import { PostedAttached } from '~/shared/components/post/PostAttached';
import { PostContent } from '~/shared/components/post/PostContent';
import { PostSiblings } from '~/shared/components/post/PostSiblings';
import { PostTop } from '~/shared/components/post/PostTop';
import { Subtop } from '~/shared/components/subtop';

export const ArchiveDetail = () => {
  return (
    <div className="container mx-auto pt-[16px] lg:pt-0">
      <Subtop breadcrumb={['HOME', '커뮤니티', '자료실']} />
      <PostTop
        category="자료실"
        title="CJ프레시웨이, 농가 상생 위한 ‘제주맛남’ 프로젝트 전개... 제주 월동채소로 급식"
        desc={
          <div className="flex items-center gap-[4px] lg:gap-[8px]">
            <TextBadge color="red" isBold>
              NEW
            </TextBadge>
            <TextBadge color="gray">자료실</TextBadge>
          </div>
        }
        commentCount={3}
      />
      <PostContent className="mt-[30px] lg:mt-[120px]" />
      <PostedAttached className="mt-[60px] lg:mt-[80px]" />
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
