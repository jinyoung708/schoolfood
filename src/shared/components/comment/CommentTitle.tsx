import { cn } from '~/shared/utils';

interface CommentTitleProps {
  className?: string;
  commentCount?: number;
  title?: string;
}

export const CommentTitle = ({ className, commentCount, title = '댓글' }: CommentTitleProps) => {
  return (
    <div className={cn('pb-[10px] lg:pb-[22px] border-b-[2px] border-gray-800', className)}>
      <p className="flex items-center gap-[4px] lg:gap-[8px]">
        <span className="text-lg lg:text-2xl font-medium">{title}</span>
        {commentCount && (
          <span className="text-lg lg:text-2xl font-bold text-secondary">{commentCount}</span>
        )}
      </p>
    </div>
  );
};
