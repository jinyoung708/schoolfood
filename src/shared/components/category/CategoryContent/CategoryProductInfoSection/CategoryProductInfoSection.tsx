import { CategorySectionTitle } from '../common/CategorySectionTitle';
import { ListTable } from '../common/ListTable';

export const CategoryProductInfoSection = () => {
  return (
    <div className="flex flex-col gap-[40px] lg:gap-[60px]">
      <div className="flex flex-col justify-center items-center">
        <img src="/schoolfood/images/img/detail01.jpg" alt="상품 이미지" className="block w-full" />
      </div>
      <div className="flex flex-col gap-[2px] lg:gap-[4px] text-center">
        <p className="text-2xl lg:text-34 font-medium">백설 바질 토마토 파스타소스</p>
        <p className="lg:text-22 text-gray-500">바질로 풍미를 더한 365g의 바질토마토 파스타 소스</p>
      </div>
      <div className="flex flex-col gap-[12px] lg:gap-[24px]">
        <CategorySectionTitle hasCopyBtn>원재료 및 함량</CategorySectionTitle>
        <ListTable
          items={[
            {
              title: '원재료 및 함량',
              content:
                '돼지고기(지방일부사용, 국산), 하이멜트치즈{치즈(체다치즈:외국산), 팜유(말레이시아산), 카제인나트륨, 감자전분가공품, 산도조절제}, 대파(중국산), 설탕, 소스, 마늘, 전분, 두류가공품1, 두류가공품2 양조간장, 복합조미식품1, 배퓨레, 물엿, 흑후추분말, 정제소금, 산도조절제, 복합조미식품2, 참기름',
            },
          ]}
        />
      </div>
    </div>
  );
};
