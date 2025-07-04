/**
 * Component: SchoolList.tsx
 * Description: 우리학교 급식자랑 리스트 컴포넌트
 */
import { useState } from 'react';
import { ViewMoreBtn } from '~/shared/components/button/ViewMoreBtn';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { ThumbItem } from '~/shared/components/List/ThumbItem';
import { ThumbList } from '~/shared/components/List/ThumbList';
import { Subtop } from '~/shared/components/subtop';

export const RecipeList = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px] pt-[16px] lg:pt-0">
        <Subtop pageTitle="추천 레시피" breadcrumb={['HOME', '레시피', '추천 레시피']} />
        <ListTopContainer
          leftChildren={
            <div className="flex items-center lg:h-[40px]">
              <ListTotalCount count={100} type="post" />
            </div>
          }
          searchChildren={
            <ListSearchInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClick={() => {}}
            />
          }
        />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[80px] mt-[20px] lg:mt-[18px]">
        <ThumbList pcCol={3}>
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/detail',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '우리학교 새학기 식단은 이렇게 했어요~ ',
              link: '/recipe/detail',
              desc: '집에서 만나는 태국의 맛을 경험해보세요',
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title:
                '메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요 메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요',
              link: '/recipe/detail',
              desc: '집에서 만나는 태국의 맛을 경험해보세요',
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/detail',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '우리학교 새학기 식단은 이렇게 했어요~ ',
              link: '/recipe/detail',
              desc: '집에서 만나는 태국의 맛을 경험해보세요',
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title:
                '메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요 메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요',
              link: '/recipe/detail',
              desc: '집에서 만나는 태국의 맛을 경험해보세요',
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/detail',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '우리학교 새학기 식단은 이렇게 했어요~ ',
              link: '/recipe/detail',
              desc: '집에서 만나는 태국의 맛을 경험해보세요',
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title:
                '메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요 메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요',
              link: '/recipe/detail',
              desc: '집에서 만나는 태국의 맛을 경험해보세요',
            }}
          />
        </ThumbList>
        <div className="flex justify-center">
          <ViewMoreBtn />
        </div>
      </div>
    </div>
  );
};
