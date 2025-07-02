/**
 * Component: ProductSwiper.tsx
 * Description: 상품 리스트를 가로 스크롤 형태로 보여주는 스와이퍼 컴포넌트
 * Props:
 *  - title?: string (섹션 상단 제목)
 *  - activeIndex?: number | null (초기 활성화할 슬라이드 인덱스)
 * Usage:
 *  <ProductSwiper title="우리 반 추천 상품" activeIndex={2} />
 */
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type SwiperClass from 'swiper';
import { FreeMode, Navigation } from 'swiper/modules';
import { ProductList } from '../List/ProductList';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/School.module.css';

interface ProductSwiperProps {
  title?: string;
  activeIndex?: number | null;
  className?: string;
}

export const ProductSwiper = ({ title, activeIndex, className }: ProductSwiperProps) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current && typeof activeIndex === 'number') {
      swiperRef.current.slideTo(activeIndex);
    }
    setCurrentIndex(typeof activeIndex === 'number' ? activeIndex : -1);
  }, [activeIndex]);

  return (
    <div className={cn(className)}>
      {title && <p className="text-lg lg:text-xl font-medium mb-[8px] lg:mb-[16px]">{title}</p>}
      <div className="relative lg:px-[24px] mx-[-16px] lg:mx-[-24px]">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          freeMode
          navigation
          modules={[FreeMode, Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => setIsEnd(false)}
          className={cn(styles.productSwiper, isEnd && styles.end)}
          breakpoints={{
            0: {
              slidesOffsetBefore: 16,
              slidesOffsetAfter: 16,
            },
            1024: {
              slidesOffsetBefore: 0,
              slidesOffsetAfter: 0,
            },
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide
              key={index}
              className={cn(
                'w-[155px]',
                typeof activeIndex === 'number' && currentIndex === index && styles.active,
              )}
            >
              <ProductList login noUnitPrice small />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
