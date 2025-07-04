/**
 * Component: ThumbItem.tsx
 * Description: 상품이 아닌 레시피, 커뮤니티 게시물, 이벤트 게시물 등 썸네일이 있는 게시물 형태의 컴포넌트
 * Props:
 * - thumb.src: string (썸네일 이미지 URL)
 * - thumb.alt?: string (썸네일 이미지 대체 텍스트)
 * - thumb.ratio?: string (이미지 비율, 예: '16/9', 기본값: '16/9')
 * - thumb.isContain?: boolean (이미지 컨테이너에 맞게 조정 여부, 기본값: false)
 * - thumb.dimmedText?: string (이미지 위에 표시할 텍스트, 선택 사항)
 * - info.title: string (게시물 제목)
 * - info.desc?: ReactNode (게시물 설명 및 뱃지)
 * - info.link: string (게시물 링크)
 * - info.created?: { at: string; by: string } (게시물 작성 정보)
 * - info.commentCount?: number (댓글 수)
 * - info.period?: { start?: string; end?: string; dday?: number } (게시물 기간 정보)
 * - className?: string (추가 클래스 이름)
 * Usage:
 *   <ThumbItem
 *     thumb={{
 *       src: '/images/img/recipe01.jpg',
 *       alt: '레시피 썸네일',
 *       ratio: '17/10',
 *       isContain: true,
 *    }}
 *    info={{
 *      title: '레시피 제목',
 *      desc: '레시피 설명',
 *      link: '/recipe/1',
 *      created: { at: '2023.10.01', by: '작성자' },
 *      commentCount: 10,
 *      period: { start: '2023.10.01', end: '2023.10.31', dday: 5 },
 *    }}
 *    className="custom-class"
 *  />
 */

import { Link } from 'react-router-dom';
import { cn } from '~/shared/utils';
import { RatioImage } from '../RatioImage';
import { Icon } from '../Icon';

interface ThumbProps {
  src: string;
  alt?: string;
  ratio?: string;
  isContain?: boolean;
  dimmedText?: string;
}
interface InfoProps {
  title: string;
  desc?: React.ReactNode;
  link: string;
  created?: {
    at: string;
    by: string;
  };
  commentCount?: number;
  period?: {
    start?: string;
    end?: string;
    dday?: number;
  };
}

export const ThumbItem = ({
  thumb,
  info,
  className,
}: {
  thumb: ThumbProps;
  info: InfoProps;
  className?: string;
}) => {
  return (
    <Link to={info.link} className={cn(className)}>
      <div className="flex flex-col gap-[16px] lg:gap-[24px]">
        <div className="relative overflow-hidden rounded-[8px]">
          <RatioImage
            src={thumb.src}
            alt={thumb.alt}
            ratio={thumb.ratio}
            isContain={thumb.isContain}
            className="w-full"
          />
          {thumb.dimmedText && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <span className="text-lg lg:text-2xl text-white font-bold">{thumb.dimmedText}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[8px] lg:gap-[16px]">
          <p className="text-lg lg:text-28 line-clamp-2 font-semibold">{info.title}</p>
          <div className="flex items-center justify-between gap-[16px]">
            {/* left area */}
            <div>
              {/* desc ( badge 포함 ) */}
              {info.desc && (
                <div className="line-clamp-1 text-sm lg:text-xl text-gray-500">{info.desc}</div>
              )}
              {info.created && (
                <p className="flex items-center gap-[8px] lg:gap-[12px] text-sm lg:text-base text-gray-500">
                  {info.created.by && <span>{info.created.by}</span>}
                  {info.created.by && info.created.at && (
                    <span className="block w-[1px] h-[10px] bg-gray-300" />
                  )}
                  {info.created.at && <span>{info.created.at}</span>}
                </p>
              )}
              {/* period */}
              {info.period && (
                <p className="flex items-center gap-[4px] lg:gap-[8px]">
                  {info.period.dday && (
                    <span className="inline-flex items-center h-[18px] lg:h-[26px] px-[4px] lg:px-[6px] rounded-full bg-secondary shrink-0">
                      <span className="text-white font-bold text-[10px] lg:text-[14px]">
                        D-{info.period.dday}
                      </span>
                    </span>
                  )}
                  <span className="text-sm lg:text-base text-gray-500">
                    {info.period.start}&nbsp;~&nbsp;{info.period.end}
                  </span>
                </p>
              )}
              {/* comment count */}
            </div>
            {/* right area */}
            {info.commentCount !== undefined && (
              <div className="flex items-center gap-[4px] shrink-0">
                <Icon src="comment.svg" />
                <span className="text-sm lg:text-base text-gray-500">{info.commentCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
