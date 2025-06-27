import { Link } from 'react-router-dom';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface PostSiblingsProps {
  className?: string;
}

export const PostSiblings = ({ className }: PostSiblingsProps) => {
  const prevDisabled = false;
  const nextDisabled = true;

  return (
    <div
      className={cn(
        'flex justify-between items-center gap-[16px] lg:gap-[32px] pt-[18px] lg:pt-[28px] border-t-[2px] border-gray-800',
        className,
      )}
    >
      <Link to="" className="w-[50%]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[12px] lg:gap-[30px]">
          <div className="flex items-center gap-[16px] shrink-0">
            <Icon src={prevDisabled ? 'arrow_left_post_gray.svg' : 'arrow_left_post.svg'} />
            <span className={cn('font-medium lg:text-lg', prevDisabled && 'text-gray-500')}>
              이전
            </span>
          </div>
          <span className="lg:text-lg text-gray-500 line-clamp-1">
            {prevDisabled ? '이전 글이 없습니다' : '25년 3월 튼튼스쿨 식단 추천'}
          </span>
        </div>
      </Link>
      <Link to="" className="w-[50%]">
        <div className="flex flex-col lg:flex-row-reverse items-end lg:items-center gap-[12px] lg:gap-[30px]">
          <div className="flex items-center gap-[16px] shrink-0">
            <span className={cn('font-medium lg:text-lg', nextDisabled && 'text-gray-500')}>
              다음
            </span>
            <Icon
              src={nextDisabled ? 'arrow_left_post_gray.svg' : 'arrow_left_post.svg'}
              className="rotate-180"
            />
          </div>
          <span className="lg:text-lg text-gray-500 line-clamp-1">
            {nextDisabled ? '다음 글이 없습니다' : '25년 3월 튼튼스쿨 식단 추천'}
          </span>
        </div>
      </Link>
    </div>
  );
};
