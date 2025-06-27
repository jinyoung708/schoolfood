/**
 * Component: NoticeDetail.tsx
 * Description: 공지사항 상세 페이지 컴포넌트
 */
import { TextBadge } from '~/shared/components/badge/TextBadge';
import { PostedAttached } from '~/shared/components/post/PostAttached';
import { PostContent } from '~/shared/components/post/PostContent';
import { PostSiblings } from '~/shared/components/post/PostSiblings';
import { PostTop } from '~/shared/components/post/PostTop';
import { Subtop } from '~/shared/components/subtop';

export const NoticeDetail = () => {
  return (
    <div className="container mx-auto pt-[16px] lg:pt-0">
      <Subtop breadcrumb={['HOME', '커뮤니티', '공지사항']} />
      <PostTop
        category="공지사항"
        title="상품 변경내역 공지"
        desc={
          <TextBadge color="red" isBold>
            NEW
          </TextBadge>
        }
        created={{
          at: '2023-10-01',
        }}
      />
      <PostContent className="mt-[30px] lg:mt-[120px]" />
      <PostedAttached className="mt-[60px] lg:mt-[80px]" />
      <PostSiblings className="mt-[42px] lg:mt-[80px]" />
      <div className="flex justify-center mt-[60px] lg:mt-[80px]">
        <button className="btn-border-primary btn-xl" type="button">
          목록
        </button>
      </div>
    </div>
  );
};
