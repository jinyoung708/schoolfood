import { Swiper, SwiperSlide } from 'swiper/react';
import { CategorySectionTitle } from '../common/CategorySectionTitle';
import { ThumbItem } from '~/shared/components/List/ThumbItem';
import { cn } from '~/shared/utils';

interface CategoryRelatedSectionProps {
  className?: string;
}

export const CategoryRelatedSection = ({ className }: CategoryRelatedSectionProps) => {
  return (
    <div className={cn('flex flex-col gap-[12px] lg:gap-[24px]', className)}>
      <CategorySectionTitle>연관 레시피</CategorySectionTitle>
      <div className="-mx-[16px] lg:mx-0">
        <Swiper
          spaceBetween={24}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full px-[16px] lg:px-0"
        >
          <SwiperSlide>
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '레시피 이미지 1',
                ratio: '16/9',
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
                ratio: '16/9',
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
                ratio: '16/9',
              }}
              info={{
                title:
                  '맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1 맛있는 레시피 1',
                desc: '이 레시피는 정말 맛있습니다.',
                link: '#',
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
