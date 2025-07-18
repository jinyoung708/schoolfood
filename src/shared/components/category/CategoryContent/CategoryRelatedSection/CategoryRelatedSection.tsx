import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { CategorySectionTitle } from '../common/CategorySectionTitle';
import { ThumbItem } from '~/shared/components/List/ThumbItem';
import { cn } from '~/shared/utils';

const StyledSwiper = styled(Swiper)`
  .swiper-pagination {
    position: static;
    margin-top: 32px;
  }
`;

interface CategoryRelatedSectionProps {
  className?: string;
}

export const CategoryRelatedSection = ({ className }: CategoryRelatedSectionProps) => {
  return (
    <div className={cn('flex flex-col gap-[12px] lg:gap-[24px]', className)}>
      <CategorySectionTitle>연관 레시피</CategorySectionTitle>
      <div className="-mx-[16px] lg:mx-0">
        <StyledSwiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            clickable: true,
            enabled: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              pagination: {
                enabled: false,
              },
            },
          }}
          className={cn('w-full px-[16px] lg:px-0')}
        >
          <SwiperSlide>
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '레시피 이미지 1',
                ratio: '17/10',
                isContain: true,
              }}
              info={{
                title:
                  '맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1',
                desc: '이 레시피는 정말 맛있습니다.',
                link: '#',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '레시피 이미지 1',
                ratio: '17/10',
                isContain: true,
              }}
              info={{
                title:
                  '맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1',
                desc: '이 레시피는 정말 맛있습니다.',
                link: '#',
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '레시피 이미지 1',
                ratio: '17/10',
                isContain: true,
              }}
              info={{
                title:
                  '맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1',
                desc: '이 레시피는 정말 맛있습니다.',
                link: '#',
              }}
            />
          </SwiperSlide>
        </StyledSwiper>
      </div>
    </div>
  );
};
