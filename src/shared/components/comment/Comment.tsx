import { ComPagination } from '~/shared/ui/ComPagination';
import { CommentInput } from './CommentInput';
import { CommentList } from './CommentList';
import { CommentTitle } from './CommentTitle';
import { cn } from '~/shared/utils';

interface CommentProps {
  className?: string;
}

export const Comment = ({ className }: CommentProps) => {
  return (
    <div className={cn('flex flex-col gap-[40px]', className)}>
      <div className="flex flex-col gap-[12px] lg:gap-[24px]">
        <CommentTitle commentCount={10} />
        <CommentInput />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[60px]">
        <CommentList />
        <ComPagination />
      </div>
    </div>
  );
};
