import { ComPagination } from '~/shared/ui/ComPagination';
import { CommentInput } from './CommentInput';
import { CommentList } from './CommentList';
import { CommentTitle } from './CommentTitle';
import { cn } from '~/shared/utils';

interface ReviewCommentProps {
  className?: string;
}

export const ReviewComment = ({ className }: ReviewCommentProps) => {
  return (
    <div className={cn('flex flex-col gap-[40px]', className)}>
      <div className="flex flex-col gap-[12px] lg:gap-[24px]">
        {/* 일반 댓글과 상단 영역(CommentTitle, CommentInput의 props)만 다름 */}
        <CommentTitle title="사용 후기" commentCount={10} />
        <CommentInput hasAttachment placeholder="사용 후기를 남겨보세요" />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[60px]">
        <CommentList />
        <ComPagination />
      </div>
    </div>
  );
};
