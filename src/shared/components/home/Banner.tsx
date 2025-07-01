/**
 * Component: Banner.tsx
 * Description: Banner 컴포넌트
 */

import { Link } from 'react-router-dom';

export const Banner = () => {
  return (
    <section className="container max-w-screen-lg mx-auto mt-[48px] lg:mt-[120px] px-0">
      <Link to="/" className="block overflow-hidden rounded-0 md:rounded-[16px]">
        <img
          src="/images/img/banner01_pc.jpg"
          alt="안전하고 믿을 수 있는 고품질의 식자재 우리 학교 급식을 다양한 월별 행사로 채워보세요 (PC)"
          className="w-full hidden md:block"
        />
        <img
          src="/images/img/banner01_mo.jpg"
          alt="우리 학교 급식을 다양한 월별 행사로 채워보세요 (모바일)"
          className="w-full block md:hidden"
        />
      </Link>
    </section>
  );
};
