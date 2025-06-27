/**
 * Component: PostTop.tsx
 * Description: 게시글 상단 영역 컴포넌트. 게시글의 카테고리, 제목, 설명, 작성자, 작성일, 기간, 댓글 수 등을 표시합니다.
 * Props:
 * - category?: string (게시글 카테고리)
 * - title: string (게시글 제목)
 * - desc?: React.ReactNode (게시글 설명)
 * - created?: { at?: string; by?: string } (작성일과 작성자 정보)
 * - period?: { start?: string; end?: string; dday?: number } (게시글 기간 정보)
 * - commentCount?: number (댓글 수)
 * - className?: string (추가 클래스 이름)
 * Usage:
 * <PostTop
 *   category="공지사항"
 *   title="게시글 제목입니다."
 *   desc="게시글 설명입니다."
 *   created={{ at: '2023.10.01', by: '홍길동' }}
 *   period={{ start: '2023.10.01', end: '2023.10.31', dday: 5 }}
 *   commentCount={10}
 *   className="my-custom-class"
 * />
 */

import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface PostTopProps {
  category?: string;
  title: string;
  desc?: React.ReactNode;
  created?: {
    at?: string;
    by?: string;
  };
  period?: {
    start?: string;
    end?: string;
    dday?: number;
  };
  commentCount?: number;
  className?: string;
}

export const PostTop = ({
  category,
  title,
  desc,
  created,
  period,
  commentCount,
  className,
}: PostTopProps) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-center items-center gap-[16px] lg:gap-[30px]',
        className,
      )}
    >
      {category && (
        <span className="inline-flex items-center justify-center h-[34px] lg:h-[48px] border border-gray-300 px-[12px] lg:px-[24px] bg-white rounded-full">
          <span className="text-sm lg:text-xl">{category}</span>
        </span>
      )}
      <div className="flex flex-col items-center gap-[4px] lg:gap-[8px]">
        <p className="text-22 lg:text-34 font-medium">{title}</p>
        <div className="flex items-center justify-center gap-[12px]">
          {/* left area */}
          <div className="flex items-center justify-center gap-[12px]">
            {desc && <p className="text-base text-gray-500">{desc}</p>}
            {created && (
              <p className="flex items-center gap-[12px] text-base text-gray-500">
                {created.by && <span>{created.by}</span>}
                {created.by && created.at && (
                  <span className="block w-[1px] h-[10px] bg-gray-300" />
                )}
                {created.at && <span>{created.at}</span>}
              </p>
            )}
            {period && (
              <p className="flex items-center gap-[12px]">
                {period.dday && (
                  <span className="inline-flex items-center h-[18px] lg:h-[26px] px-[4px] lg:px-[6px] rounded-full bg-secondary">
                    <span className="text-white font-bold text-[10px] lg:text-[14px]">
                      D-{period.dday}
                    </span>
                  </span>
                )}
                <span className="text-base text-gray-500">
                  {period.start}&nbsp;~&nbsp;{period.end}
                </span>
              </p>
            )}
          </div>
          {/* right area */}
          {commentCount && (
            <>
              <span className="block w-[1px] h-[10px] bg-gray-300" />
              <div className="flex items-center gap-[4px] shrink-0">
                <Icon src="comment.svg" />
                <span className="text-base lg:text-base text-gray-500">{commentCount}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
