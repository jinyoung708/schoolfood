/**
 * Component: SchoolList.tsx
 * Description: 우리학교 급식자랑 리스트 컴포넌트
 */
import { useState } from 'react';
import { ViewMoreBtn } from '~/shared/components/button/ViewMoreBtn';
import { WriteBtn } from '~/shared/components/button/WriteBtn';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { ThumbItem } from '~/shared/components/List/ThumbItem';
import { ThumbList } from '~/shared/components/List/ThumbList';
import { Subtop } from '~/shared/components/subtop';

export const SchoolList = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px] pt-[16px] lg:pt-0">
        <Subtop
          pageTitle="우리학교 급식자랑"
          breadcrumb={['HOME', '커뮤니티', '우리학교 급식자랑']}
        />
        <ListTopContainer
          leftChildren={
            <div className="h-[40px] flex items-center">
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
          rightChildren={<WriteBtn />}
        />
      </div>
      <div className="flex flex-col gap-[40px] lg:gap-[80px] mt-[20px] lg:mt-[18px]">
        <ThumbList>
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/school/detail',
              commentCount: 21,
              created: { by: 'qwe***', at: '2025. 02. 25' },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
            }}
            info={{
              title: '우리학교 새학기 식단은 이렇게 했어요~ ',
              link: '/school/detail',
              commentCount: 21,
              created: { by: 'qwe***', at: '2025. 02. 25' },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요 메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요',
              link: '/school/detail',
              commentCount: 21,
              created: { by: 'qwe***', at: '2025. 02. 25' },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
            }}
            info={{
              title: '이번에 아이들도 정말 잘 먹더라고요 :) 그래서 공유합니다!!',
              link: '/school/detail',
              commentCount: 21,
              created: { by: 'qwe***', at: '2025. 02. 25' },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/school/detail',
              commentCount: 21,
              created: { by: 'qwe***', at: '2025. 02. 25' },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
            }}
            info={{
              title: '우리학교 새학기 식단은 이렇게 했어요~ ',
              link: '/school/detail',
              commentCount: 21,
              created: { by: 'qwe***', at: '2025. 02. 25' },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요 메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요',
              link: '/school/detail',
              commentCount: 21,
              created: { by: 'qwe***', at: '2025. 02. 25' },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
            }}
            info={{
              title: '이번에 아이들도 정말 잘 먹더라고요 :) 그래서 공유합니다!!',
              link: '/school/detail',
              commentCount: 21,
              created: { by: 'qwe***', at: '2025. 02. 25' },
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
