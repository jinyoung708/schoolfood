/**
 * Component: FooterNotice.tsx
 * Description: 푸터 공지사항 영역 컴포넌트.
 */
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from '~/shared/css/Footer.module.css';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';

export const FooterNotice = () => {
  return (
    <div className={styles.noticeWrap}>
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex items-center h-[60px] lg:h-[84px]">
          <p className={styles.title}>공지사항</p>
          <div className={styles.notice}>
            <Swiper
              direction="vertical"
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              loop
              modules={[Autoplay]}
              className="h-full w-auto"
            >
              <SwiperSlide>
                <Link to="#">동계 방학 기간(25년) 중 공급 불가 품목 안내</Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="#">동계 방학 기간(25년) 중 공급 불가 품목 안내2</Link>
              </SwiperSlide>
            </Swiper>
          </div>
          <Link to="" className={cn('hidden lg:block', styles.btn)}>
            <Icon src="plus.svg" />
          </Link>
          <div className="ml-auto ">
            <select name="" id="" className={styles.family}>
              <option value="">Family Site</option>
              <option value="">Family Site</option>
              <option value="">Family Site</option>
              <option value="">Family Site</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
