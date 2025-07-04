/**
 * Component: SchoolDetail.tsx
 * Description: 우리학교 급식자랑 상세 컴포넌트
 */
import { PostInfo } from '~/shared/components/post/PostInfo';
import { PostSiblings } from '~/shared/components/post/PostSiblings';
import { ProductSwiper } from '~/shared/components/post/ProductSwiper';
import { Subtop } from '~/shared/components/subtop';
import 'swiper/css';
import 'swiper/css/pagination';
import { PostedAttached } from '~/shared/components/post/PostAttached';
import { Mobile, PC } from '~/shared/components/Responsive';

export const RecipeDetail = () => {
  return (
    <div className="container mx-auto">
      <Subtop breadcrumb={['HOME', '레시피', '추천 레시피']} />
      <div className="lg:flex gap-[48px]">
        <div className="mx-[-16px] lg:mx-0 lg:w-[55.98%]">
          {/* 1) 텍스트 영역과 높이 동일, 이미지 비율맞추고 빈 영역 배경색 넣은 경우 */}
          {/* <img
            src="/images/img/recipe01.jpg"
            alt=""
            className="h-full w-full aspect-[17/10] object-contain bg-gray-150 lg:rounded-[16px]"
          /> */}

          {/* 2) 텍스트 영역과 높이 동일, 이미지 꽉 채운 경우 */}
          {/* <img
            src="/images/img/recipe01.jpg"
            alt=""
            className="h-full w-full aspect-[17/10] object-cover bg-gray-150 lg:rounded-[16px]"
          /> */}

          {/* 3) 높이 이미지 사이즈, 이미지 비율맞춘 경우 */}
          <img
            src="/images/img/recipe01.jpg"
            alt=""
            className="w-full aspect-[17/10] object-contain bg-gray-150 lg:rounded-[16px]"
          />
        </div>

        <div className="flex flex-col lg:w-[calc(100%-55.98%-48px)] justify-between gap-[30px] mt-[24px] lg:mt-0">
          <PostInfo
            title="마라 수혈이 필요할 때 마파두부 덮밥"
            desc={<>입에 착 감기는 마파두부에 마라로 알싸한 맛을 더한 마라 마파두부</>}
          />
          <PC>
            <ProductSwiper title="레시피 연관상품" />
          </PC>
        </div>
      </div>

      <div className="mt-[60px] lg:mt-[120px]">
        <p className="text-lg lg:text-2xl mb-[12px] lg:mb-[24px] font-medium">상세 설명</p>
        <img src="/images/img/recipe01.jpg" alt="" className="w-full" />
      </div>

      <Mobile>
        <ProductSwiper title="레시피 연관상품" className="mt-[60px]" />
      </Mobile>

      <PostedAttached className="mt-[60px] lg:mt-[80px]" />
      <PostSiblings className="mt-[42px] lg:mt-[80px]" />

      <div className="flex justify-center mt-[60px] lg:mt-[80px]">
        <button className="btn-border-primary btn-xl" type="button">
          목록
        </button>
      </div>
    </div>
  );
};
