import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface CommentInputProps {
  className?: string;
  placeholder?: string;
  hasAttachment?: boolean;
}

export const CommentInput = ({
  className,
  placeholder = '댓글을 남겨보세요',
  hasAttachment,
}: CommentInputProps) => {
  return (
    <div className={cn('flex flex-col items-end gap-[12px]', className)}>
      <div className="w-full relative h-[128px] border border-gray-500 bg-white rounded-[8px] p-[16px] pb-[40px]">
        <textarea
          placeholder={placeholder}
          className="w-full resize-none placeholder:text-placeholder border-none p-0 h-full"
        />
        <div className="absolute right-[16px] bottom-[16px] text-right">
          <p className="text-base text-gray-400">
            <span className="text-gray-800">0</span>/500
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[8px]">
        {hasAttachment && (
          <button className="btn-gray-400 btn-md flex items-center gap-[4px]" type="button">
            <span>이미지 추가</span>
            <Icon src="plus_16.svg" />
          </button>
        )}
        <button className="btn-primary btn-md" type="button">
          등록
        </button>
      </div>
    </div>
  );
};
