/**
 * Component: EventList.tsx
 * Description: 진행중인 이벤트 목록 페이지 컴포넌트
 */
import { useState } from 'react';
import { ViewMoreBtn } from '~/shared/components/button/ViewMoreBtn';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { ThumbItem } from '~/shared/components/List/ThumbItem';
import { ThumbList } from '~/shared/components/List/ThumbList';
import { Subtop } from '~/shared/components/subtop';

export const EventList = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px] pt-[16px] lg:pt-0">
        <Subtop pageTitle="진행중인 이벤트" breadcrumb={['HOME', '이벤트', '진행중인 이벤트']} />
        <ListTopContainer
          leftChildren={
            <div className="lg:h-[40px] flex items-center">
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
              alt: '이벤트 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title:
                '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/event/detail',
              commentCount: 21,
              period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/event/detail',
              commentCount: 21,
              period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/event/detail',
              commentCount: 21,
              period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/event/detail',
              commentCount: 21,
              period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/event/detail',
              commentCount: 21,
              period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/event/detail',
              commentCount: 21,
              period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '17/10',
              isContain: true,
            }}
            info={{
              title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/event/detail',
              commentCount: 21,
              period: { start: '2023.10.01', end: '2023.10.31', dday: 1 },
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
