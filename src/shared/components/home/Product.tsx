/**
 * Component: Product.tsx
 * Description: Product 컴포넌트
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Link } from 'react-router-dom';
import { ProductList } from '~/shared/components/List/ProductList';
import styles from '~/shared/css/Home.module.css';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';
import { Mobile, PC } from '../Responsive';

export const Product = () => {
  return (
    <section className="container max-w-screen-lg mx-auto mt-[48px] lg:mt-[120px]">
      <div className={cn('flex flex-col', styles.titleBox)}>
        <p className={styles.title1}>이달의 메인상품</p>
        <p className={cn('flex items-center', styles.title2)}>
          <span>따끈따끈 방금 새로 나왔어요</span>
          <Link to="/product" className={cn('flex items-center ml-auto', styles.btnAll)}>
            전체보기
            <Icon src="arrow_right.svg" className="lg:w-auto w-[12px]" />
          </Link>
        </p>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        freeMode
        modules={[FreeMode]}
        className="mx-[-16px] lg:mx-0"
        breakpoints={{
          0: {
            spaceBetween: 12,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
          },
          1024: {
            spaceBetween: 24,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
        }}
      >
        <SwiperSlide className="w-[162px] lg:w-[288px]">
          <ProductList login />
        </SwiperSlide>
        <SwiperSlide className="w-[162px] lg:w-[288px]">
          <ProductList login />
        </SwiperSlide>
        <SwiperSlide className="w-[162px] lg:w-[288px]">
          <ProductList login />
        </SwiperSlide>
        <SwiperSlide className="w-[162px] lg:w-[288px]">
          <ProductList login />
        </SwiperSlide>
        <SwiperSlide className="w-[162px] lg:w-[288px]">
          <ProductList login />
        </SwiperSlide>
        <SwiperSlide className="w-[162px] lg:w-[288px]">
          <ProductList login />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
