/**
 * Component: MonthlyEvent.tsx
 * Description: 월별 행사지 컴포넌트
 */
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { PostTop } from '~/shared/components/post/PostTop';
import { Subtop } from '~/shared/components/subtop';
import 'swiper/css';
import 'swiper/css/free-mode';
import { ProductList } from '~/shared/components/List/ProductList';
import { Mobile, PC } from '~/shared/components/Responsive';

export const MonthlyEvent = () => {
  const isPC = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="container mx-auto mt-[16px] lg:mt-0">
      <Subtop breadcrumb={['HOME', '월간행사', '월별 행사지']} />
      <PostTop
        {...(isPC && { category: '월별 행사지' })}
        title="CJ프레시웨이, 농가 상생 위한 ‘제주맛남’ 프로젝트 전개... 제주 월동채소로 급식"
        created={{
          at: '2025. 02. 25 ~ 2025. 02. 25',
        }}
      />
      <div className="mt-[60px]">
        <PC>
          <img src="/images/img/detail02.jpg" alt="PC 상세 이미지" />
        </PC>
        <Mobile>
          <img src="/images/img/detail02.jpg" alt="MO 상세 이미지" />
        </Mobile>
      </div>
      <div className="mt-[60px] lg:mt-[120px]">
        <p className="text-lg lg:text-2xl font-medium mb-[8px] lg:mb-[24px]">관련 상품</p>
        <div className="mx-[-16px]">
          <Swiper
            slidesPerView="auto"
            freeMode
            modules={[FreeMode]}
            breakpoints={{
              0: {
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
                spaceBetween: 16,
              },
              1024: {
                slidesOffsetBefore: 16,
                slidesOffsetAfter: 16,
                spaceBetween: 24,
              },
            }}
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index} className="w-[155px] lg:w-[288px]">
                <ProductList login noUnitPrice {...(!isPC && { small: true })} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
