/**
 * Component: Visual.tsx
 * Description: Visual 컴포넌트
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import { Button } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Home.module.css';
import { Icon } from '../Icon';

export const Visual = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  const handleToggleAutoplay = () => {
    if (!swiperRef.current) return;

    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <div className="relative w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ type: 'fraction', el: '.custom-pagination' }}
          autoplay={{ delay: 3000 }}
          loop
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTotalSlides(swiper.slides.length);
          }}
          onSlideChange={(swiper) => {
            const realIndex = swiper.realIndex + 1;
            setCurrentSlide(realIndex);
          }}
          className="overflow-hidden"
        >
          <SwiperSlide>
            <Link to="/">
              <img
                src="/schoolfood/schoolfood/images/img/visual01_pc.jpg"
                alt="가장 트렌디한 급식 솔루션 튼튼스쿨 (PC)"
                className="hidden md:block w-full"
              />
              <img
                src="/schoolfood/schoolfood/images/img/visual01_mo.jpg"
                alt="가장 트렌디한 급식 솔루션 튼튼스쿨 (모바일)"
                className="block md:hidden w-full"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <img
                src="/schoolfood/schoolfood/images/img/visual02_pc.jpg"
                alt="4월 봄 제철 간편식 반찬 메뉴 (PC)"
                className="hidden md:block w-full"
              />
              <img
                src="/schoolfood/schoolfood/images/img/visual02_mo.jpg"
                alt="4월 봄 제철 간편식 반찬 메뉴 (모바일)"
                className="block md:hidden w-full"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <img
                src="/schoolfood/schoolfood/images/img/visual03_pc.jpg"
                alt="즐겁고 행복한 5월 맛있는 메뉴 (PC)"
                className="hidden md:block w-full"
              />
              <img
                src="/schoolfood/schoolfood/images/img/visual03_mo.jpg"
                alt="즐겁고 행복한 5월 맛있는 메뉴 (모바일)"
                className="block md:hidden w-full"
              />
            </Link>
          </SwiperSlide>
        </Swiper>

        <div className={cn('absolute flex items-center', styles.visualControls)}>
          <Button
            onClick={handleToggleAutoplay}
            aria-label={isPlaying ? '슬라이드 정지' : '슬라이드 재생'}
            title={isPlaying ? 'Pause' : 'Play'}
            className={cn('flex items-center justify-center rounded-full', styles.btnPlay)}
          >
            {isPlaying ? <Icon src="stop.svg" /> : <Icon src="play.svg" />}
          </Button>
          {totalSlides > 0 && (
            <div className={cn('flex items-center rounded-full', styles.pagination)}>
              <span className={styles.current}>{currentSlide}</span>
              <span className={styles.bar} />
              <span className={styles.total}>{totalSlides}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
