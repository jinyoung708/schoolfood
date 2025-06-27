/**
 * Component: ArchiveList.tsx
 * Description: 자료실 목록 페이지 컴포넌트
 */
import { useState } from 'react';
import { TextBadge } from '~/shared/components/badge/TextBadge';
import { ViewMoreBtn } from '~/shared/components/button/ViewMoreBtn';
import { ListSearchInput } from '~/shared/components/List/ListSearchInput';
import { ListTopContainer } from '~/shared/components/List/ListTopContainer';
import { ListTotalCount } from '~/shared/components/List/ListTotalCount';
import { ThumbItem } from '~/shared/components/List/ThumbItem';
import { ThumbList } from '~/shared/components/List/ThumbList';
import { Subtop } from '~/shared/components/subtop';

export const ArchiveList = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop
          pageTitle="자료실"
          breadcrumb={['HOME', '커뮤니티', '자료실']}
          submenu={['자료실', '교육자료', 'POP', '식단추천']}
        />
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
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title: '안전관리! 미끄러짐,넘어짐 사고',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="red" isBold>
                    NEW
                  </TextBadge>
                  <TextBadge color="gray">자료실</TextBadge>
                </div>
              ),
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title: '영양POP)관절과 척추 건강',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="red" isBold>
                    NEW
                  </TextBadge>
                  <TextBadge color="gray">교육자료</TextBadge>
                </div>
              ),
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title: '영양POP관',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="gray">POP</TextBadge>
                </div>
              ),
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="red" isBold>
                    NEW
                  </TextBadge>
                  <TextBadge color="gray">자료실</TextBadge>
                </div>
              ),
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="red" isBold>
                    NEW
                  </TextBadge>
                  <TextBadge color="gray">자료실</TextBadge>
                </div>
              ),
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="red" isBold>
                    NEW
                  </TextBadge>
                  <TextBadge color="gray">자료실</TextBadge>
                </div>
              ),
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="red" isBold>
                    NEW
                  </TextBadge>
                  <TextBadge color="gray">자료실</TextBadge>
                </div>
              ),
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="red" isBold>
                    NEW
                  </TextBadge>
                  <TextBadge color="gray">자료실</TextBadge>
                </div>
              ),
            }}
          />
          <ThumbItem
            thumb={{
              src: '/images/img/recipe01.jpg',
              alt: '이벤트 썸네일',
              ratio: '16/9',
            }}
            info={{
              title:
                '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
              link: '/archive/detail',
              commentCount: 21,
              desc: (
                <div className="flex items-center gap-[4px] lg:gap-[8px]">
                  <TextBadge color="red" isBold>
                    NEW
                  </TextBadge>
                  <TextBadge color="gray">자료실</TextBadge>
                </div>
              ),
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
