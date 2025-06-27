/**
 * Component: VideoItem.tsx
 * Description: 유튜브 영상 썸네일과 게시물 정보를 보여주는 컴포넌트
 * Props:
 * - thumb.src: string (유튜브 영상 썸네일 URL, 사용하지 않고 videoId로 재생)
 * - thumb.alt?: string (썸네일 이미지 대체 텍스트, optional)
 * - thumb.ratio?: string (영상 비율, 예: '16/9', 기본값: '16/9')
 * - thumb.isContain?: boolean (영상 컨테이너에 맞게 조정 여부, 기본값: false) [현재 사용 안함]
 * - thumb.dimmedText?: string (영상 위에 표시할 텍스트, 선택 사항)
 * - thumb.videoId: string (유튜브 영상 ID)
 * - info.title: string (게시물 제목)
 * - info.desc?: React.ReactNode (게시물 설명 및 뱃지)
 * - info.link: string (게시물 링크)
 * - info.created?: { at: string; by: string } (게시물 작성 정보)
 * - info.commentCount?: number (댓글 수)
 * - info.period?: { start?: string; end?: string; dday?: number } (게시물 기간 정보)
 * - className?: string (추가 클래스 이름)
 *
 * Usage:
 * <VideoItem
 *   thumb={{
 *     videoId: 'abc123',
 *     alt: '유튜브 썸네일',
 *     ratio: '16/9',
 *     dimmedText: 'Live',
 *   }}
 *   info={{
 *     title: '영상 제목',
 *     desc: '영상 설명',
 *     link: '/video/1',
 *     created: { at: '2023.10.01', by: '작성자' },
 *     commentCount: 10,
 *     period: { start: '2023.10.01', end: '2023.10.31', dday: 5 },
 *   }}
 *   className="custom-class"
 * />
 */
import { Link } from 'react-router-dom';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';
import { YoutubePlayer } from '../YoutubePlayer';

interface VideoProps {
  src: string;
  alt?: string;
  ratio?: string;
  isContain?: boolean;
  dimmedText?: string;
  videoId: string;
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

export const VideoItem = ({
  thumb,
  info,
  className,
}: {
  thumb: VideoProps;
  info: InfoProps;
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      <div className="flex flex-col gap-[16px] lg:gap-[24px]">
        <div className="relative overflow-hidden rounded-[8px] text-[0px]">
          <YoutubePlayer videoId={thumb.videoId} ratio={thumb.ratio} info={false} />
          {thumb.dimmedText && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <span className="text-lg lg:text-2xl text-white font-bold">{thumb.dimmedText}</span>
            </div>
          )}
        </div>
        <Link to={info.link} className="flex flex-col gap-[8px] lg:gap-[16px]">
          <p className="text-lg lg:text-28 line-clamp-2 font-semibold">{info.title}</p>
          <div className="flex items-center justify-between gap-[16px]">
            {/* left area */}
            <div>
              {/* desc ( badge 포함 ) */}
              {info.desc && (
                <p className="line-clamp-1 text-sm lg:text-xl text-gray-500">{info.desc}</p>
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
        </Link>
      </div>
    </div>
  );
};
