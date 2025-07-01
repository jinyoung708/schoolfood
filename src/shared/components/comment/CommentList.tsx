import { CommentItem } from './CommentItem';

export const CommentList = () => {
  return (
    <ul className="flex flex-col gap-[24px]">
      <li className="border-b border-gray-100 pb-[23px]">
        <CommentItem
          createdBy="홍길동"
          createdAt="2025.02.10 05:30"
          content="제주 월동채소를 급식에 활용한다는 아이디어 너무 좋네요. 학생들이나 직장인들이 신선한 지역 농산물로 만든 건강식을 접할 수 있다는 건 큰 장점인 듯.특히 겨울철 채소는 당도도 높고 맛도 좋아서 활용도가 높다고 들었어요. 양배추 돈가스나 당근 라페 샌드위치 같은 메뉴는 이름만 들어도 먹어보고 싶네요. 요즘은 급식도 그냥 한 끼 때우는 게 아니라 ‘경험’이 된다는 게 느껴져요. 셰프와 협업해서 지역 특산물에 가치를 더한다는 점도 인상 깊어요. 강병욱 셰프가 참여했다니 음식 퀄리티도 기대됩니다. 단순히 농산물 소비를 늘리는 걸 넘어서, 지역 경제에 실질적인 도움이 되길 바랍니다. 제주 외 다른 지역 농산물도 이런 방식으로 소개되면 좋겠어요.앞으로도 이런 프로젝트 많이 생겼으면 합니다. CJ프레시웨이의 이번 시도는 충분히 응원할 만하네요."
          images={[
            '/schoolfood/images/img/product01.jpg',
            '/schoolfood/images/img/product02.jpg',
            '/schoolfood/images/img/product03.jpg',
            '/schoolfood/images/img/product04.jpg',
            '/schoolfood/images/img/product01.jpg',
            '/schoolfood/images/img/product02.jpg',
            '/schoolfood/images/img/product03.jpg',
            '/schoolfood/images/img/product04.jpg',
            '/schoolfood/images/img/product05.jpg',
            '/schoolfood/images/img/product05.jpg',
          ]}
        />
      </li>
      <li className="border-b border-gray-100 pb-[23px]">
        <CommentItem
          createdBy="김철수"
          createdAt="2025.02.11 10:15"
          content="이런 프로젝트는 정말 환영합니다! 제주도 농산물의 신선함을 급식에 활용하는 건 지역 경제에도 큰 도움이 될 것 같아요. 특히 겨울철에는 신선한 채소가 귀한데, 이렇게 활용하면 학생들도 건강한 식사를 할 수 있겠네요."
        />
      </li>
      <li className="border-b border-gray-100 pb-[23px]">
        <CommentItem
          createdBy="이영희"
          createdAt="2025.02.12 08:45"
          content="제주 월동채소를 급식에 활용한다는 아이디어 너무 좋네요. 학생들이나 직장인들이 신선한 지역 농산물로 만든 건강식을 접할 수 있다는 건 큰 장점인 듯."
        />
      </li>
    </ul>
  );
};
