import { cn } from '~/shared/utils';

interface PostContentProps {
  className?: string;
}

export const PostContent = ({ className }: PostContentProps) => {
  return (
    <div className={cn(className)}>
      {/* 이미지가 모바일에서 좌우 여백 없이 들어가야 할 경우 아래 스타일 사용 */}
      <div className="mx-[-16px] lg:mx-0">
        <img src="/schoolfood/schoolfood/images/img/recipe01.jpg" alt="" className="w-full" />
      </div>
      <p>내용</p>
    </div>
  );
};
