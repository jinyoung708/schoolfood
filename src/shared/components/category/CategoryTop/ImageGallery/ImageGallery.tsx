import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, EffectFade, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import { RatioImage } from '../../../RatioImage';
import { cn } from '~/shared/utils';

interface ImageGalleryItemProps {
  thumbSrc: string;
  mainSrc: string;
  badges?: 'HACCP'[];
}

interface ImageGalleryProps {
  items: ImageGalleryItemProps[];
}

export const ImageGallery = ({ items }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState<SwiperInstance | null>(null);
  const [thumbSwiper, setThumbSwiper] = useState<SwiperInstance | null>(null);
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row relative gap-[16px] lg:gap-0">
      {/* pagination thumbs slide */}
      <div className="lg:w-[21.875%] lg:h-full lg:absolute lg:top-0 lg:left-0">
        <Swiper
          modules={[Controller, FreeMode]}
          freeMode
          onSwiper={(swiper) => setThumbSwiper(swiper)}
          slidesPerView={4}
          spaceBetween={8}
          breakpoints={{
            1024: {
              direction: 'vertical',
              spaceBetween: '2.22222%',
            },
          }}
          className="px-[16px] lg:px-0 lg:h-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.mainSrc + index}>
              <button
                type="button"
                className={cn(
                  'block w-full rounded-[8px] lg:rounded-[16px] relative after:absolute after:inset-0 after:border-[2px] after:border-secondary after:rounded-[8px] lg:after:rounded-[16px] after:z-10',
                  activeIndex === index ? 'after:block' : 'after:hidden',
                )}
                onClick={() => mainSwiper && mainSwiper.slideTo(index)}
              >
                <RatioImage
                  src={item.thumbSrc}
                  ratio="1/1"
                  className="rounded-[8px] lg:rounded-[16px]"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* slide */}
      <div className="lg:w-[75%] lg:pl-[25%] box-content">
        <Swiper
          modules={[Controller, EffectFade]}
          onSwiper={(swiper) => setMainSwiper(swiper)}
          controller={{ control: thumbSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1}
          spaceBetween={8}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="lg:w-full"
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.mainSrc + index} className="relative">
              <RatioImage
                src={item.mainSrc}
                ratio="1/1"
                className="aspect-[375/468] lg:aspect-[576/720] lg:rounded-[16px]"
              />
              {item.badges && item.badges.length > 0 && (
                <div className="absolute top-[20px] left-[20px] z-[1] flex items-center flex-wrap">
                  {item.badges.map((badge, badgeIndex) => (
                    <div key={badge + badgeIndex}>
                      {(() => {
                        switch (badge) {
                          case 'HACCP':
                            return (
                              // badge 이미지는 공백 포함한 40x40px 크기로 작업함
                              <img
                                src="/schoolfood/schoolfood/images/icon/badge_haccp.png"
                                alt="HACCP 인증"
                              />
                            );
                          default:
                            return null;
                        }
                      })()}
                    </div>
                  ))}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
