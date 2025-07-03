/**
 * Component: YoutubePlayer.tsx
 * Description: 유튜브 영상 썸네일과 모달 플레이어를 제공하는 컴포넌트
 * Props:
 *  - videoId: string (유튜브 동영상 ID, 필수)
 *  - ratio: string (영상 비율, 기본값 '328/583')
 *  - className: string (추가 CSS 클래스명)
 *  - info: boolean (썸네일 위 정보 표시 여부, 기본값 true)
 * Usage:
 *  <YoutubePlayer videoId="dQw4w9WgXcQ" ratio="16/9" />
 */

import { Button, Dialog, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/YoutubePlayer.module.css';
import { Icon } from './Icon';
import { PC } from './Responsive';

interface YoutubePlayerProps {
  videoId: string;
  ratio?: string;
  className?: string;
  info?: boolean;
}

export const YoutubePlayer = ({
  videoId,
  ratio = '328/583',
  className,
  info = true,
}: YoutubePlayerProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const aspectClass = `aspect-[${ratio}]`;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1`;
  const modalEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <>
      <Button
        className={cn(
          'relative w-full h-full cursor-pointer overflow-hidden bg-cover bg-center bg-no-repeat bg-gray-150',
          aspectClass,
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(true)}
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      >
        {!isHovered ? (
          info && (
            <div
              className={cn(
                'flex flex-col justify-end absolute bottom-0 left-0 right-0 top-0 text-white px-[16px] py-[20px] lg:p-[32px]',
                styles.infoBox,
              )}
            >
              <div className="flex items-center gap-[4px] lg:gap-[8px] mb-[8px] lg:mb-[12px]">
                <img
                  src="https://yt3.ggpht.com/ArvWyPqtEm688CDdh1Yxjb6YhAOPPVJARcwUwb4rPtm0qFERTxLFGOzcJPokt-L07g37Fc0LXQs=s48-c-k-c0x00ffffff-no-rj"
                  alt="채널 이미지"
                  className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] rounded-full"
                />
                <span className={cn('text-xs lg:text-xl text-white font-medium', styles.name)}>
                  cjfreshway_official
                </span>
              </div>
              <p
                className={cn(
                  'text-base lg:text-2xl font-bold line-clamp-2 text-left break-keep',
                  styles.title,
                )}
              >
                피스타치오와 카다이프가 들어간 이색 두바이 디저트
              </p>
            </div>
          )
        ) : (
          <PC>
            <iframe
              className="w-full h-full"
              src={embedUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Preview"
            />
          </PC>
        )}
        <div className="absolute inset-0 transition" />
      </Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-[var(--header-z)]"
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-[16px]">
          <DialogPanel className="relative bg-black max-w-[960px] w-full aspect-video">
            <Button
              onClick={() => setIsOpen(false)}
              className="absolute bottom-[100%] mb-[16px] lg:mb-[20px] right-0 w-[32px] lg:w-[auto]"
            >
              <Icon src="close_circle.svg" />
            </Button>
            <iframe
              className="w-full h-full"
              src={modalEmbedUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Modal Video"
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
