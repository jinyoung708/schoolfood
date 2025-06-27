/**
 * Component: RecipeVideoList.tsx
 * Description: 우리학교 급식자랑 리스트 컴포넌트
 */
import { useState } from 'react';
import { ViewMoreBtn } from '~/shared/components/button/ViewMoreBtn';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { ThumbList } from '~/shared/components/List/ThumbList';
import { VideoItem } from '~/shared/components/List/VideoItem';
import { Subtop } from '~/shared/components/subtop';

export const RecipeVideoList = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px] pt-[16px] lg:pt-0">
        <Subtop pageTitle="동영상 레시피" breadcrumb={['HOME', '레시피', '동영상 레시피']} />
        <ListTopContainer
          leftChildren={<ListTotalCount count={100} type="post" />}
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
          <VideoItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
              videoId: 'ikEpYxy4nCE',
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/1',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
            }}
          />
          <VideoItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
              videoId: 'ikEpYxy4nCE',
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/1',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
            }}
          />
          <VideoItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
              videoId: 'ikEpYxy4nCE',
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/1',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
            }}
          />
          <VideoItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
              videoId: 'ikEpYxy4nCE',
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/1',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
            }}
          />
          <VideoItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
              videoId: 'ikEpYxy4nCE',
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/1',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
            }}
          />
          <VideoItem
            thumb={{
              src: '/images/img/temp1.jpg',
              alt: '우리학교 급식자랑 썸네일',
              ratio: '16/9',
              videoId: 'ikEpYxy4nCE',
            }}
            info={{
              title:
                '게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록 게시물 타이틀 width에 맞춰 최대 두 줄까지 노출 가능하도록',
              link: '/recipe/1',
              desc: '입에 착 감기는 이국적인 마라 마파두부 요리에요',
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
