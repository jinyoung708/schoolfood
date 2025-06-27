import { CategorySectionTitle } from '../common/CategorySectionTitle';
import { CategoryVideoContainer } from './CategoryVideoContainer';

export const CategoryVideoSection = () => {
  return (
    <div className="flex flex-col gap-[12px] lg:gap-[24px]">
      <CategorySectionTitle>대량조리 동영상</CategorySectionTitle>
      <div className="flex flex-col justify-center items-center gap-[60px] lg:gap-[120px]">
        <CategoryVideoContainer videoId="ikEpYxy4nCE" isVertical />
        <CategoryVideoContainer videoId="ikEpYxy4nCE" />
      </div>
    </div>
  );
};
