/**
 * Component: Recipe.tsx
 * Description: Recipe 컴포넌트
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Pagination, Controller, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '~/shared/css/Home.module.css';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';
import { RatioImage } from '../RatioImage';

export const Recipe = () => {
  const [leftSwiper, setLeftSwiper] = useState<SwiperClass | null>(null);
  const [rightSwiper, setRightSwiper] = useState<SwiperClass | null>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const [swiperEffect, setSwiperEffect] = useState<'slide' | 'fade'>('slide');
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    const updateEffect = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      setSwiperEffect(isLargeScreen ? 'fade' : 'slide');
    };

    updateEffect();
    window.addEventListener('resize', updateEffect);
    return () => window.removeEventListener('resize', updateEffect);
  }, []);

  useEffect(() => {
    setSwiperKey((prev) => prev + 1);
  }, [swiperEffect]);

  return (
    <section
      className={cn(styles.recipeWrapper, 'mt-[48px] lg:mt-[120px] pt-[48px] lg:pt-[120px]')}
    >
      <div className="container max-w-screen-lg mx-auto">
        <div className={cn('flex flex-col', styles.titleBox, styles.white)}>
          <p className={cn(styles.title1)}>이달의 레시피</p>
          <p className={cn('flex items-center', styles.title2)}>
            <span className="flex items-center gap-[4px]">
              쉽고 간단하게 알려줄게요‍
              <Icon src="emoji01.svg" className="w-[20px] lg:w-[33px]" />
            </span>
            <Link
              to="/recipe"
              className={cn('flex items-center ml-auto text-white', styles.btnAll)}
            >
              전체보기
              <Icon src="arrow_right_white.svg" className="lg:w-auto w-[12px]" />
            </Link>
          </p>
        </div>
        <div className="relative lg:flex lg:h-[565px]">
          <div className={cn('h-full', styles.imgSwiperWrap)}>
            <Swiper
              modules={[Controller, Pagination]}
              onSwiper={setLeftSwiper}
              controller={{ control: rightSwiper }}
              loop
              pagination={{
                clickable: true,
                el: paginationRef.current!,
              }}
              className={cn(
                'relative w-full h-full rounded-[16px] overflow-hidden',
                styles.imgSwiper,
              )}
            >
              <SwiperSlide>
                <Link to="/recipe/detail" className={styles.play}>
                  <img
                    src="/schoolfood/images/img/recipe01.jpg"
                    alt="마라 수혈이 필요할 때 마파두부 덮밥"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/recipe/detail" className={styles.play}>
                  <img
                    src="/schoolfood/images/img/recipe02.jpg"
                    alt="부담 없는 두부면 팟타이"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/recipe/detail" className={styles.play}>
                  <img
                    src="/schoolfood/images/img/recipe03.jpg"
                    alt="톡톡 터지는 단짠 새콤함 옥수수 살사"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={cn('h-full bg-white rounded-[16px]', styles.textSwiperWrap)}>
            <Swiper
              key={swiperKey} // 이 key가 변경될 때마다 Swiper 다시 렌더됨
              modules={[Controller, EffectFade]}
              effect={swiperEffect}
              autoHeight={swiperEffect === 'slide'}
              controller={{ control: leftSwiper }}
              onSwiper={setRightSwiper}
              loop
              className={cn('w-full lg:h-full swiper-fade', styles.textSwiper)}
            >
              <SwiperSlide className="lg:flex flex-col justify-between">
                <div className={styles.recipeInfoBox}>
                  <p className="truncate text-lg lg:text-28 font-semibold">
                    마라 수혈이 필요할 때 마파두부 덮밥
                  </p>
                  <p className="text-sm lg:text-xl text-gray-500 line-clamp-3 mt-[8px] lg:mt-[16px]">
                    입에 착 감기는 마파두부에 마라로 알싸한 맛을 더한 마라 마파두부 덮밥은 매콤하고
                    짭짤한 맛으로 밥과 잘 어울려 고급 중화 레스토랑 못지 않은 근사한 요리에요.
                  </p>
                  <Link
                    to="/recipe/detail"
                    className={cn(
                      'flex items-center text-sm lg:text-lg text-gray-500 font-medium gap-[2px] lg:gap-[8px] mt-[12px] lg:mt-[16px]',
                    )}
                  >
                    자세히보기
                    <Icon src="arrow_right.svg" className="lg:w-auto w-[12px]" />
                  </Link>
                </div>
                <div className={cn(styles.relatedProducts)}>
                  <p className="text-base lg:text-xl font-medium mb-[16px]">레시피 연관상품</p>
                  <ul className="flex gap-[12px] lg:gap-[16px]">
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product02.jpg"
                          ratio="1/1"
                          alt="고메 탕수육"
                          className="rounded-[8px] lg:rounded-[16px] bg-gray-150"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          고메 탕수육
                        </p>
                      </Link>
                    </li>
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product03.jpg"
                          ratio="1/1"
                          alt="단단한 큰 두부"
                          className="rounded-[8px] lg:rounded-[16px] bg-gray-150"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          단단한 큰 두부
                        </p>
                      </Link>
                    </li>
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product04.jpg"
                          ratio="1/1"
                          alt="프리미엄 굴소스"
                          className="rounded-[8px] lg:rounded-[16px] bg-gray-150"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          프리미엄 굴소스
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide className="lg:flex flex-col justify-between">
                <div className={styles.recipeInfoBox}>
                  <p className="truncate text-lg lg:text-28 font-semibold">
                    부담 없는 두부면 팟타이
                  </p>
                  <p className="text-sm lg:text-xl text-gray-500 line-clamp-3 mt-[8px] lg:mt-[16px]">
                    새우 토마토 파스타는 간편하게 시판 토마토소스를 활용해 만들 수 있는 요리로,
                    탱글한 새우와 신선한 토마토가 어우러져 감칠맛과 식감을 모두 만족시킬 수 있는
                    메뉴에요.
                  </p>
                  <Link
                    to="/recipe/detail"
                    className={cn(
                      'flex items-center text-sm lg:text-lg text-gray-500 font-medium gap-[2px] lg:gap-[8px] mt-[12px] lg:mt-[16px]',
                    )}
                  >
                    자세히보기
                    <Icon src="arrow_right.svg" className="lg:w-auto w-[12px]" />
                  </Link>
                </div>
                <div className={cn(styles.relatedProducts)}>
                  <p className="text-base lg:text-xl font-medium mb-[16px]">레시피 연관상품</p>
                  <ul className="flex gap-[12px] lg:gap-[16px]">
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product01.jpg"
                          ratio="1/1"
                          alt="고단백 두부면"
                          className="rounded-[8px] lg:rounded-[16px] bg-gray-150"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          고단백 두부면
                        </p>
                      </Link>
                    </li>
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product02.jpg"
                          ratio="1/1"
                          alt="1+등급 건강란"
                          className="rounded-[8px] lg:rounded-[16px]"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          1+등급 건강란
                        </p>
                      </Link>
                    </li>
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product05.jpg"
                          ratio="1/1"
                          alt="바질 토마토 소스"
                          className="rounded-[8px] lg:rounded-[16px] bg-gray-150"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          바질 토마토 소스
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide className="lg:flex flex-col justify-between">
                <div className={styles.recipeInfoBox}>
                  <p className="truncate text-lg lg:text-28 font-semibold">
                    톡톡 터지는 단짠 새콤함 옥수수 살사
                  </p>
                  <p className="text-sm lg:text-xl text-gray-500 line-clamp-3 mt-[8px] lg:mt-[16px]">
                    아삭거리는 식감과 달콤한 맛이 일품인 초당 옥수수
                    <br />
                    그냥 먹어도 맛있는 초당 옥수수지만, 살사로 요리해 먹으면 여름철 별미 간식으로
                    색다르게 즐길 수 있어요.
                  </p>
                  <Link
                    to="/recipe/detail"
                    className={cn(
                      'flex items-center text-sm lg:text-lg text-gray-500 font-medium gap-[2px] lg:gap-[8px] mt-[12px] lg:mt-[16px]',
                    )}
                  >
                    자세히보기
                    <Icon src="arrow_right.svg" className="lg:w-auto w-[12px]" />
                  </Link>
                </div>
                <div className={cn(styles.relatedProducts)}>
                  <p className="text-base lg:text-xl font-medium mb-[16px]">레시피 연관상품</p>
                  <ul className="flex gap-[12px] lg:gap-[16px]">
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product03.jpg"
                          ratio="1/1"
                          alt="이츠웰 스위트콘"
                          className="rounded-[8px] lg:rounded-[16px] bg-gray-150"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          이츠웰 스위트콘
                        </p>
                      </Link>
                    </li>
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product04.jpg"
                          ratio="1/1"
                          alt="백설 허브맛솔트"
                          className="rounded-[8px] lg:rounded-[16px] bg-gray-150"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          백설 허브맛솔트
                        </p>
                      </Link>
                    </li>
                    <li className="w-[calc((100%-24px)/3)] lg:w-[calc((100%-32px)/3)]">
                      <Link to="/category/detail">
                        <RatioImage
                          src="/schoolfood/images/img/product05.jpg"
                          ratio="1/1"
                          alt="백설 쌀올리고당"
                          className="rounded-[8px] lg:rounded-[16px] bg-gray-150"
                          isContain
                        />
                        <p className="mt-[6px] lg:mt-[12px] text-sm lg:text-lg font-medium truncate">
                          백설 쌀올리고당
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div ref={paginationRef} />
        </div>
      </div>
    </section>
  );
};
