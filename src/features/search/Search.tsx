/**
 * Component: Search.tsx
 * Description: 통합검색 페이지 컴포넌트
 */
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { ThumbItem } from '~/shared/components/List/ThumbItem';
import { ThumbList } from '~/shared/components/List/ThumbList';
import { Subtop } from '~/shared/components/subtop';
import { SearchBoard } from './SearchBoard';
import { NoticeBoard } from '../notice/NoticeBoard';
import styles from '~/shared/css/Search.module.css';
import { SearchForm } from './SearchForm';
import { ProductList } from '~/shared/components/List/ProductList';

export const Search = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop breadcrumb={['HOME', '통합검색']} />
      </div>

      <SearchForm />

      <div className="flex flex-col gap-[60px] lg:gap-[120px]">
        {/* 상품 */}
        <SearchBoard title="상품">
          <ul className="grid flex-wrap gap-x-[13px] lg:gap-x-[24px] gap-y-[30px] lg:gap-y-[60px] grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
            <li>
              <ProductList login />
            </li>
          </ul>
        </SearchBoard>

        {/* 레시피 */}
        <SearchBoard title="레시피">
          <ThumbList pcCol={3}>
            <ThumbItem
              thumb={{
                src: '/images/img/temp1.jpg',
                alt: '우리학교 급식자랑 썸네일',
                ratio: '16/9',
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
                ratio: '16/9',
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
                ratio: '16/9',
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
                ratio: '16/9',
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
                ratio: '16/9',
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
                ratio: '16/9',
              }}
              info={{
                title:
                  '메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요 메뉴 구성 부담 없고 반응도 좋아서 자주 돌리는 조합이에요',
                link: '/recipe/detail',
                desc: '집에서 만나는 태국의 맛을 경험해보세요',
              }}
            />
          </ThumbList>
        </SearchBoard>

        {/* 커뮤니티 */}
        <SearchBoard title="커뮤니티">
          <TabGroup className="basic-tab">
            <TabList className="tab mb-[20px] lg:mb-[24px]">
              <Tab>자료실</Tab>
              <Tab>교육자료</Tab>
              <Tab>pop</Tab>
              <Tab>식단추천</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <NoticeBoard className={styles.noticeWrap} />
              </TabPanel>
              <TabPanel>
                <NoticeBoard className={styles.noticeWrap} />
              </TabPanel>
              <TabPanel>
                <NoticeBoard className={styles.noticeWrap} />
              </TabPanel>
              <TabPanel>
                <NoticeBoard className={styles.noticeWrap} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </SearchBoard>

        {/* 이벤트 */}
        <SearchBoard title="이벤트">
          <ThumbList pcCol={3}>
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '이벤트 썸네일',
                ratio: '16/9',
              }}
              info={{
                title:
                  '영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관 영양POP)관절과 척추 건강을 지키는 올바른 습관',
                link: '/event/1',
                commentCount: 21,
                period: { start: '2023-10-01', end: '2023-10-31', dday: 1 },
              }}
            />
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '이벤트 썸네일',
                ratio: '16/9',
              }}
              info={{
                title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
                link: '/event/1',
                commentCount: 21,
                period: { start: '2023-10-01', end: '2023-10-31', dday: 1 },
              }}
            />
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '이벤트 썸네일',
                ratio: '16/9',
              }}
              info={{
                title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
                link: '/event/1',
                commentCount: 21,
                period: { start: '2023-10-01', end: '2023-10-31', dday: 1 },
              }}
            />
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '이벤트 썸네일',
                ratio: '16/9',
              }}
              info={{
                title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
                link: '/event/1',
                commentCount: 21,
                period: { start: '2023-10-01', end: '2023-10-31', dday: 1 },
              }}
            />
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '이벤트 썸네일',
                ratio: '16/9',
              }}
              info={{
                title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
                link: '/event/1',
                commentCount: 21,
                period: { start: '2023-10-01', end: '2023-10-31', dday: 1 },
              }}
            />
            <ThumbItem
              thumb={{
                src: '/images/img/recipe01.jpg',
                alt: '이벤트 썸네일',
                ratio: '16/9',
              }}
              info={{
                title: '영양POP)관절과 척추 건강을 지키는 올바른 습관',
                link: '/event/1',
                commentCount: 21,
                period: { start: '2023-10-01', end: '2023-10-31', dday: 1 },
              }}
            />
          </ThumbList>
        </SearchBoard>
      </div>
    </div>
  );
};
