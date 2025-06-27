/**
 * Component: ListTotalCount.tsx
 * Description: 리스트 상단의 총 개수 표시 컴포넌트
 * Props:
 * - count: number (총 개수)
 * - type: 'product' | 'post' (리스트 유형, 'product'는 상품, 'post'는 게시물)
 * Usage:
 * <ListTotalCount count={100} type="product" />
 */

interface ListTotalCountProps {
  count: number;
  type: 'product' | 'post';
}

export const ListTotalCount = ({ count, type }: ListTotalCountProps) => {
  let typeText = '';
  if (type === 'product') {
    typeText = '개의 상품';
  } else if (type === 'post') {
    typeText = '건의 게시물';
  }
  return (
    <div className="shrink-0">
      <p>
        총 <span className="font-semibold text-secondary">{count}</span>
        {typeText}이 있습니다
      </p>
    </div>
  );
};
