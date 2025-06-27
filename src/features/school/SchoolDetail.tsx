/**
 * Component: SchoolDetail.tsx
 * Description: 우리학교 급식자랑 상세 컴포넌트
 */
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Comment } from '~/shared/components/comment/Comment';
import { PostInfo } from '~/shared/components/post/PostInfo';
import { PostSiblings } from '~/shared/components/post/PostSiblings';
import { ProductSwiper } from '~/shared/components/post/ProductSwiper';
import { Subtop } from '~/shared/components/subtop';
import 'swiper/css';
import styles from '~/shared/css/School.module.css';
import { cn } from '~/shared/utils';
import { AddProductTooltip } from '~/shared/components/modal/AddProductTooltip';

export const SchoolDetail = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto pt-[16px] lg:pt-0">
      <Subtop breadcrumb={['HOME', '이벤트', '진행중인 이벤트']} />
      <div className="lg:flex gap-[48px]">
        <div className="mx-[-16px] lg:mx-0 lg:w-[55.98%]">
          <Swiper
            modules={[Pagination]}
            pagination
            loop
            className={cn('w-full lg:rounded-[16px]', styles.imgSwiper)}
          >
            <SwiperSlide className="relative">
              <img src="/images/img/temp1.jpg" alt="" className="aspect-[860/686] w-full" />
              <AddProductTooltip
                left={17}
                top={64}
                isOpen={openIndex === 0}
                onToggle={() => setOpenIndex(openIndex === 0 ? null : 0)}
                onClose={() => setOpenIndex(null)}
              />
              <AddProductTooltip
                left={78}
                top={45}
                isOpen={openIndex === 1}
                onToggle={() => setOpenIndex(openIndex === 1 ? null : 1)}
                onClose={() => setOpenIndex(null)}
              />
              <AddProductTooltip
                left={62}
                top={46}
                isOpen={openIndex === 2}
                onToggle={() => setOpenIndex(openIndex === 2 ? null : 2)}
                onClose={() => setOpenIndex(null)}
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img src="/images/img/temp1.jpg" alt="" className="aspect-[860/686] w-full" />
              <AddProductTooltip
                left={61.5}
                top={25}
                isOpen={openIndex === 3}
                onToggle={() => setOpenIndex(openIndex === 3 ? null : 3)}
                onClose={() => setOpenIndex(null)}
              />
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img src="/images/img/temp1.jpg" alt="" className="aspect-[860/686] w-full" />
              <AddProductTooltip
                left={38}
                top={63}
                isOpen={openIndex === 4}
                onToggle={() => setOpenIndex(openIndex === 4 ? null : 4)}
                onClose={() => setOpenIndex(null)}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col lg:w-[calc(100%-55.98%-48px)] justify-between gap-[30px] mt-[24px] lg:mt-0">
          <PostInfo
            title="우리학교 새학기 식단은 이렇게 했어요!"
            created={{
              at: '2025. 02. 25',
              by: 'qwe***',
            }}
            commentCount={21}
            desc={
              <>
                새 학기를 맞이하여 우리 학교 급식도 한층 더 특별해졌답니다.
                <br />
                첫 달의 급식이 아이들의 학교생활을 더욱 즐겁게 만들어주는 중요한 요소가 되는 만큼,
                <br />
                아이들이 건강하게 성장할 수 있는 한 끼 한 끼에 진심을 담았습니다.😊
                <br />
                제철 식재료와 균형 잡힌 영양소를 고려하여 다양한 메뉴가 준비되어 있고,
                학부모님들께서도 학부모님들께서도
              </>
            }
          />
          <ProductSwiper title="메뉴 사용한 상품" activeIndex={openIndex} />
        </div>
      </div>

      <Comment className="mt-[60px] lg:mt-[120px]" />
      <PostSiblings className="mt-[42px] lg:mt-[80px]" />

      <div className="flex justify-center mt-[60px] lg:mt-[80px]">
        <button className="btn-border-primary btn-xl" type="button">
          목록
        </button>
      </div>
    </div>
  );
};
