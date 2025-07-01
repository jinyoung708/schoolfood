import { CategorySectionTitle } from '../common/CategorySectionTitle';

export const CategoryRecipeSection = () => {
  return (
    <div className="flex flex-col gap-[12px] lg:gap-[24px]">
      <CategorySectionTitle>활용 레시피</CategorySectionTitle>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/img/detail02.jpg" alt="레시피 이미지" className="block w-full" />
      </div>
    </div>
  );
};
