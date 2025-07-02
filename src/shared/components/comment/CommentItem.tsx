import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { CommentPopover } from './CommentPopover';
import 'swiper/css';
import { RatioImage } from '../RatioImage';
import { cn } from '~/shared/utils';

interface CommentItemProps {
  createdBy: string;
  createdAt: string;
  content: string;
  images?: string[];
  className?: string;
}
export const CommentItem = ({
  createdBy,
  createdAt,
  content,
  images,
  className,
}: CommentItemProps) => {
  const [isLargeImage, setIsLargeImage] = useState(false);
  const toggleImageSize = () => {
    setIsLargeImage((prev) => !prev);
  };

  return (
    <div className={cn('flex flex-col items-stretch gap-[24px]', className)}>
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-[20px]">
            <span className="text-base font-medium">{createdBy}</span>
            <span className="text-sm text-gray-400">{createdAt}</span>
          </p>
          <CommentPopover />
        </div>
        <p className="text-base text-[#555]">{content}</p>
      </div>
      {images && images.length > 0 && (
        <div className="w-[calc(100%+32px)] lg:w-full mx-[-16px] lg:mx-0 relative">
          <Swiper
            modules={[FreeMode]}
            freeMode
            slidesPerView="auto"
            spaceBetween={8}
            slidesOffsetBefore={16}
            slidesOffsetAfter={16}
            breakpoints={{
              1024: {
                spaceBetween: 16,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 43,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={image + index}
                className={cn(
                  'rounded-[8px] overflow-hidden',
                  isLargeImage ? 'w-[200px]' : 'w-[100px]',
                )}
              >
                <button className="block" type="button" onClick={toggleImageSize}>
                  <span className="sr-only">이미지 확대</span>
                  <RatioImage src={image} ratio="1/1" isContain />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="absolute right-0 top-0 z-[1] h-full w-[43px] pointer-events-none"
            style={{
              background:
                'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)',
            }}
          />
        </div>
      )}
    </div>
  );
};
