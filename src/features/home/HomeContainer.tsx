/**
 * Component: HomeContainer.tsx
 * Description: 홈 화면 주요 섹션들을 순서대로 배치하는 컨테이너 컴포넌트
 */
import { Banner } from '~/shared/components/home/Banner';
import { Community } from '~/shared/components/home/Community';
import { Product } from '~/shared/components/home/Product';
import { Recipe } from '~/shared/components/home/Recipe';
import { Shortform } from '~/shared/components/home/Shortform';
import { Sponsor } from '~/shared/components/home/Sponsor';
import { Visual } from '~/shared/components/home/Visual';

export const HomeContainer = () => {
  return (
    <div className="w-full pt-[var(--safeArea-t)]">
      <Visual />
      <Product />
      <Banner />
      <Recipe />
      <Community />
      <Shortform />
      <Sponsor />
    </div>
  );
};
