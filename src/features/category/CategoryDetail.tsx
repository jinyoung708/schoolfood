import { CategoryContentContainer } from '~/shared/components/category/CategoryContent/CategoryContentContainer/CategoryContentContainer';
import { CategoryTop } from '~/shared/components/category/CategoryTop/CategoryTop';
import { Subtop } from '~/shared/components/subtop';

export const CategoryDetail = () => {
  return (
    <div className="container mx-auto">
      <Subtop breadcrumb={['카테고리', '핫도그·만두·냉동기타', '냉동기타']} />
      <CategoryTop />
      {/* 시안과 상이하게 tab의 padding-top이 있어 mt 조절함 */}
      <CategoryContentContainer className="mt-[44px] lg:mt-[100px]" />
      <div className="flex justify-center mt-[60px] lg:mt-[80px]">
        <button className="btn-border-primary btn-xl" type="button">
          목록
        </button>
      </div>
    </div>
  );
};
