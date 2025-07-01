/**
 * Component: Sponsor.tsx
 * Description: Sponsor 컴포넌트
 */

import { Link } from 'react-router-dom';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Home.module.css';

export const Sponsor = () => {
  return (
    <section className="container max-w-screen-lg mx-auto mt-[48px] lg:mt-[120px]">
      <div
        className={cn(
          'flex flex-wrap lg:flex-nowrap bg-gray-50 rounded-[8px] lg:rounded-[16px]',
          styles.sponerList,
        )}
      >
        <Link to="">
          <img src="/images/img/logo_freshway.png" alt="CJ FRESHWAY" className="object-contain" />
        </Link>
        <Link to="">
          <img
            src="/images/img/logo_instagram_freshway.png"
            alt="cjfreshway_official"
            className="object-contain"
          />
        </Link>
        <Link to="">
          <img
            src="/images/img/logo_instagram_school.png"
            alt="cjfreshway_school"
            className="object-contain"
          />
        </Link>
        <Link to="">
          <img
            src="/images/img/logo_freshmarket.png"
            alt="FRESH MARKET"
            className="object-contain"
          />
        </Link>
        <Link to="">
          <img
            src="/images/img/logo_solution.png"
            alt="CJ FRESHWAY Soultion LAB"
            className="object-cover"
          />
        </Link>
        <Link to="">
          <img src="/images/img/logo_youtube.png" alt="YouTube" className="object-contain" />
        </Link>
      </div>
    </section>
  );
};
