/**
 * Component: BoardHeader.tsx
 * Description: PC 버전 게시판 헤더 컴포넌트. 게시판 유형에 맞는 헤더를 렌더링합니다.
 * Props:
 * - type?: 'default' | 'notice' | 'mypage' | 'search' (게시판 유형, 기본값: 'default')
 * - className?: string (추가 클래스 이름)
 * Usage:
 * <BoardHeader type="notice" className="my-custom-class" />
 */

import { cn } from '~/shared/utils';
import { boardColumnWidth } from './columnWIdth';

interface BoardHeaderProps {
  type?: 'default' | 'notice' | 'mypage' | 'search';
  className?: string;
}

const Id = () => {
  return (
    <div className={cn('flex justify-center', boardColumnWidth.id)}>
      <span className="text-lg font-medium">번호</span>
    </div>
  );
};

const Category = () => {
  return (
    <div className={cn('flex justify-center', boardColumnWidth.category)}>
      <span className="text-lg font-medium">구분</span>
    </div>
  );
};

const Title = () => {
  return (
    <div className={cn('flex justify-center flex-1')}>
      <span className="text-lg font-medium">제목</span>
    </div>
  );
};

const Attachments = () => {
  return <div className={cn('flex justify-center', boardColumnWidth.attachments)} />;
};

const CommentCount = () => {
  return <div className={cn('flex justify-center', boardColumnWidth.commentCount)} />;
};

const CreatedBy = () => {
  return (
    <div className={cn('flex justify-center', boardColumnWidth.createdBy)}>
      <span className="text-lg font-medium">작성자</span>
    </div>
  );
};

const CreatedAt = () => {
  return (
    <div className={cn('flex justify-center', boardColumnWidth.createdAt)}>
      <span className="text-lg font-medium">작성일</span>
    </div>
  );
};

const PostedAt = () => {
  return (
    <div className={cn('flex justify-center', boardColumnWidth.createdAt)}>
      <span className="text-lg font-medium">게시일</span>
    </div>
  );
};

export const BoardHeader = ({ type = 'default', className }: BoardHeaderProps) => {
  return (
    <div className={cn('border-b border-gray-100 border-t-[2px] border-t-gray-800', className)}>
      <div className="hidden lg:flex items-center xl:gap-[52px] lg:gap-[24px] w-full lg:py-[16px] lg:px-[30px]">
        <Id />
        <Category />
        <Title />
        {type === 'notice' && <Attachments />}
        {(type === 'default' || type === 'mypage') && <CommentCount />}
        {type === 'default' && <CreatedBy />}
        {(type === 'default' || type === 'mypage' || type === 'search') && <CreatedAt />}
        {type === 'notice' && <PostedAt />}
      </div>
    </div>
  );
};
