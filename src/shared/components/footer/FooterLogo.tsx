/**
 * Component: FooterLogo.tsx
 * Description: 푸터 로고 영역 컴포넌트.
 */

import { Link } from 'react-router-dom';
import styles from '~/shared/css/Footer.module.css';
import { cn } from '~/shared/utils';

export const FooterLogo = () => {
  return (
    <div className="py-[20px] bg-gray-50">
      <div className="container max-w-screen-lg mx-auto">
        <div
          className={cn(
            'flex-wrap lg:flex-nowrap flex items-center justify-between gap-x-[14px] lg:gap-x-[0]',
            styles.logoWrap,
          )}
        >
          <Link to="#">
            <img
              src="/images/img/logo_mfds.png"
              alt="식품의약품안전처"
              className="object-contain"
            />
          </Link>
          <Link to="#">
            <img src="/images/img/logo_mohw.png" alt="보건복지부" className="object-contain" />
          </Link>
          <Link to="#">
            <img
              src="/images/img/logo_neis.png"
              alt="나이스 대국민서비스"
              className="object-contain"
            />
          </Link>
          <Link to="#">
            <img
              src="/images/img/logo_foodsafetykorea.png"
              alt="식품안전나라"
              className="object-contain"
            />
          </Link>
          <Link to="#">
            <img
              src="/images/img/logo_dietary4u.png"
              alt="어린이급식관리지원센터"
              className="object-contain"
            />
          </Link>
          <Link to="#">
            <img
              src="/images/img/logo_childcare.png"
              alt="육아종합지원센터"
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
