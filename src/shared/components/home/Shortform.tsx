/**
 * Component: Shortform.tsx
 * Description: Shortform 컴포넌트
 */
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Button } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { YoutubePlayer } from '../YoutubePlayer';
import styles from '~/shared/css/Home.module.css';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

export const Shortform = () => {
  return (
    <section className={cn(styles.shortformWrapper, 'mt-[48px] lg:mt-[120px]')}>
      <div className="lg:flex lg:m-auto lg:gap-[184px] lg:pl-[calc((100vw-1568px)/2)]">
        <div className="lg:shrink-0 lg:ml-[calc(16px+var(--safeArea-l))]">
          <div className={cn('flex flex-col shrink-0', styles.titleBox)}>
            <p className={styles.title1}>지금 가장 핫한</p>
            <p className={cn('flex items-center', styles.title2)}>
              <span className="flex items-center lg:block">
                요즘 인기있는
                <br className="hidden lg:block" />
                숏폼 레시피
                <Icon
                  src="emoji03.svg"
                  className="inline-block align-middle ml-[4px] lg:mt-[-10px] w-[20px] lg:w-[33px]"
                />
              </span>
              <Link to="/" className={cn('flex items-center ml-auto lg:hidden', styles.btnAll)}>
                숏폼보기
                <Icon src="arrow_right.svg" className="lg:w-auto w-[12px]" />
              </Link>
            </p>
          </div>
          <Button className="hidden lg:block mt-[28px] btn-primary btn-xl">숏폼 보러가기</Button>
        </div>

        <Swiper
          slidesPerView="auto"
          freeMode
          modules={[FreeMode]}
          className="w-full px-[16px] lg:px-0"
          breakpoints={{
            0: {
              spaceBetween: 12,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
        >
          <SwiperSlide className="rounded-[8px] lg:rounded-[16px] w-[202px] lg:w-[328px] overflow-hidden text-[0]">
            <YoutubePlayer videoId="ikEpYxy4nCE" />
          </SwiperSlide>
          <SwiperSlide className="rounded-[8px] lg:rounded-[16px] w-[202px] lg:w-[328px] overflow-hidden text-[0]">
            <YoutubePlayer videoId="y_UdSvenxFI" />
          </SwiperSlide>
          <SwiperSlide className="rounded-[8px] lg:rounded-[16px] w-[202px] lg:w-[328px] overflow-hidden text-[0]">
            <YoutubePlayer videoId="3vSnFPb3flc" />
          </SwiperSlide>
          <SwiperSlide className="rounded-[8px] lg:rounded-[16px] w-[202px] lg:w-[328px] overflow-hidden text-[0]">
            <YoutubePlayer videoId="wEhhFHOtMCU" />
          </SwiperSlide>
          <SwiperSlide className="rounded-[8px] lg:rounded-[16px] w-[202px] lg:w-[328px] overflow-hidden text-[0]">
            <YoutubePlayer videoId="70hL81Gx7G4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
