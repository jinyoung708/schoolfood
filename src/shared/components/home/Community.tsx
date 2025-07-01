/**
 * Component: Community.tsx
 * Description: Community 컴포넌트
 */

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '~/shared/utils';
import { RatioImage } from '../RatioImage';
import { Icon } from '../Icon';
import styles from '~/shared/css/Home.module.css';
import { Mobile, PC } from '../Responsive';
import 'swiper/css';
import 'swiper/css/free-mode';

export const Community = () => {
  return (
    <section
      className={cn(
        styles.communityWrapper,
        'container max-w-screen-lg mx-auto mt-[48px] lg:mt-[120px]',
      )}
    >
      <div className={cn('flex flex-col', styles.titleBox)}>
        <p className={styles.title1}>영양사 실무 커뮤니티</p>
        <p className={cn('flex items-center', styles.title2)}>
          <span className="flex items-center gap-[4px]">
            노하우 공유하고 소통해요
            <Icon src="emoji02.svg" className="w-[20px] lg:w-[33px]" />
          </span>
          <Mobile>
            <Link to="/" className={cn('flex items-center ml-auto text-white', styles.btnAll)}>
              전체보기
              <Icon src="arrow_right.svg" className="lg:w-auto w-[12px]" />
            </Link>
          </Mobile>
        </p>
      </div>
      <TabGroup className="basic-tab">
        <TabList className="tab mb-[20px] lg:mb-[24px]">
          <Swiper
            spaceBetween={12}
            slidesPerView="auto"
            freeMode
            modules={[FreeMode]}
            className="mx-0"
          >
            {['우리학교 급식자랑', '상품사용 꿀팁', '자주묻는 질문'].map((label, idx) => (
              <SwiperSlide key={idx} style={{ width: 'auto' }}>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'px-4 py-2 bg-blue-500 text-white rounded-full'
                      : 'px-4 py-2 bg-gray-100 text-gray-600 rounded-full'
                  }
                >
                  {label}
                </Tab>
              </SwiperSlide>
            ))}
          </Swiper>
          <PC>
            <Link to="/" className="btnAll">
              전체보기
              <Icon src="arrow_right.svg" className="lg:w-auto w-[12px]" />
            </Link>
          </PC>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ul className="post-list">
              <li>
                <Link to="/school/detail">
                  <div className="post-content">
                    <div className="post-text">
                      <p className="post-title">우리반 인기메뉴는 이거!</p>
                      <p className="post-desc">
                        3월의 급식은 확실히 달라요! 새학기를 맞아 우리 학교만의 특별 3월의 급식은
                        3월의 급식은 확실히 달라요! 새학기를 맞아 우리 학교만의 특별 3월의 급식은
                      </p>
                    </div>
                    <div className="post-thumbnail">
                      <RatioImage
                        src="/schoolfood/images/img/community01.jpg"
                        ratio="1/1"
                        className="rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="post-meta">
                    <p className="post-user">
                      <span className="post-username">qwe***</span>
                      <span className="post-date">25. 02. 25</span>
                    </p>
                    <span className="post-comments">
                      <Icon src="comments.svg" className="w-[16px] lg:w-auto" />
                      21
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/school/detail">
                  <div className="post-content">
                    <div className="post-text">
                      <p className="post-title">아이들이 먼저 물어봤어요</p>
                      <p className="post-desc">
                        새 학기를 준비하는 영양사 선생님들께 다양한 식단 아이디어로 도움이 새 학기를
                        준비하는 영양사 선생님들께 다양한 식단 아이디어로 도움이
                      </p>
                    </div>
                    <div className="post-thumbnail">
                      <RatioImage
                        src="/schoolfood/images/img/community02.jpg"
                        ratio="1/1"
                        className="rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="post-meta">
                    <p className="post-user">
                      <span className="post-username">qwe***</span>
                      <span className="post-date">25. 02. 25</span>
                    </p>
                    <span className="post-comments">
                      <Icon src="comments.svg" className="w-[16px] lg:w-auto" />
                      21
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/school/detail">
                  <div className="post-content">
                    <div className="post-text">
                      <p className="post-title">3월 신학기 식단 운영 결과</p>
                      <p className="post-desc">
                        이번에 아이들도 정말 잘 먹더라고요 :) 그래서 공유합니다!! 다음식단에 이번에
                        아이들도 정말 잘 먹더라고요 :) 그래서 공유합니다!! 다음식단에
                      </p>
                    </div>
                    <div className="post-thumbnail">
                      <RatioImage
                        src="/schoolfood/images/img/community03.jpg"
                        ratio="1/1"
                        className="rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="post-meta">
                    <p className="post-user">
                      <span className="post-username">qwe***</span>
                      <span className="post-date">25. 02. 25</span>
                    </p>
                    <span className="post-comments">
                      <Icon src="comments.svg" className="w-[16px] lg:w-auto" />
                      21
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="post-list">
              <li>
                <Link to="/tip/detail">
                  <div className="post-content">
                    <div className="post-text">
                      <p className="post-category">상품사용 꿀팁</p>
                      <p className="post-title2">어린이 호떡 상품(2kg) 활용 공유해요</p>
                    </div>
                    <div className="post-thumbnail">
                      <RatioImage
                        src="/schoolfood/images/img/community02.jpg"
                        ratio="1/1"
                        className="rounded-[12px]"
                      />
                    </div>
                  </div>
                  <div className="post-meta">
                    <p className="post-user">
                      <span className="post-username">qwe***</span>
                      <span className="post-date">25. 02. 25</span>
                    </p>
                    <span className="post-comments">
                      <Icon src="comments.svg" className="w-[16px] lg:w-auto" />
                      21
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="post-list">
              <li>
                <Link to="/qna/detail">
                  <div className="post-content">
                    <div className="post-text grow">
                      <p className="post-category">Q&A</p>
                      <p className="post-title">배송 방법은 어떻게 되나요?</p>
                    </div>
                  </div>
                  <div className="post-meta">
                    <p className="post-user">
                      <span className="post-username">qwe***</span>
                      <span className="post-date">25. 02. 25</span>
                    </p>
                    <span className="post-comments">
                      <Icon src="comments.svg" className="w-[16px] lg:w-auto" />
                      21
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </section>
  );
};
