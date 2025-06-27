/**
 * Component: BoardItem.tsx
 * Description: 게시판 아이템 컴포넌트. 게시판 분류에 맞지 않는 prop를 입력 할 경우 BoardHeader와 레이아웃이 맞지 않을 수 있습니다.
 * Props:
 * - id?: number (게시물 ID)
 * - link: string (게시물 상세 페이지 링크)
 * - category: string (게시물 카테고리)
 * - title: string (게시물 제목)
 * - createdBy?: string (게시물 작성자)
 * - createdAt?: string (게시물 작성일 혹은 게시일)
 * - commentCount?: number (댓글 수)
 * - hasAttachments?: boolean (첨부파일 여부)
 * - isNew?: boolean (신규 게시물 여부)
 * - isPinned?: boolean (고정 게시물 여부)
 * * className?: string (추가 클래스 이름)
 * Usage:
 * <BoardItem
 *   id={1}
 *   link="/boardDetail/1"
 *   category="공지사항"
 *   title="게시판 제목입니다."
 *   createdBy="홍길동"
 *   createdAt="2023.10.01 12:36"
 *   commentCount={5}
 *   hasAttachments
 *   isNew
 *   isPinned
 *   className="my-custom-class"
 * />
 */
import { Link } from 'react-router-dom';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';
import { boardColumnWidth } from './columnWIdth';
import { TextBadge } from '../badge/TextBadge';

interface BoardItemProps {
  id?: number;
  link: string;
  category: string;
  title: string;
  createdBy?: string;
  createdAt?: string;
  commentCount?: number;
  hasAttachments?: boolean;
  isNew?: boolean;
  isPinned?: boolean;
  className?: string;
}

export const BoardItem = ({
  id,
  link,
  category,
  title,
  createdBy,
  createdAt,
  commentCount,
  hasAttachments,
  isNew,
  isPinned,
  className,
}: BoardItemProps) => {
  return (
    <Link
      to={link}
      className={cn(
        'flex flex-col lg:flex-row items-start lg:items-center xl:gap-[52px] lg:gap-[24px] py-[24px] px-[8px] lg:py-[30px] lg:px-[30px] border-b border-gray-100',
        isPinned && 'bg-gray-50',
        className,
      )}
    >
      <div className={cn('hidden lg:flex justify-center', boardColumnWidth.id)}>
        {isPinned ? (
          <Icon src="exclamation_pinned.svg" alt="고정된 게시물" />
        ) : (
          <span className="font-medium font-gray-500 line-clamp-1">{id}</span>
        )}
      </div>
      <div className={cn('flex justify-center', boardColumnWidth.category)}>
        <span className="text-primary font-medium line-clamp-1">{category}</span>
      </div>
      <div className="mt-[16px] lg:mt-0 lg:flex-1">
        <div className="flex items-center gap-[8px]">
          <span className="text-lg font-medium line-clamp-1">{title}</span>
          {isNew && (
            <TextBadge color="red" isBold className="shrink-0">
              NEW
            </TextBadge>
          )}
        </div>
      </div>
      <div className="w-full lg:w-auto flex items-center justify-between gap-[16px] xl:gap-[52px] lg:gap-[24px] mt-[8px] lg:mt-0">
        <div className="flex items-center gap-[8px] xl:gap-[52px] lg:gap-[24px] flex-wrap">
          {hasAttachments && (
            <div className={cn('lg:w-[115px] flex justify-center', boardColumnWidth.attachments)}>
              <Icon alt="첨부파일" src="attachment.svg" />
            </div>
          )}
          {commentCount && (
            <div
              className={cn(
                'hidden lg:flex justify-center items-center gap-[4px] shrink-0',
                boardColumnWidth.commentCount,
              )}
            >
              <Icon src="comment.svg" />
              <span className="text-sm lg:text-base text-gray-500">{commentCount}</span>
            </div>
          )}
          {hasAttachments && createdBy && (
            <span className="block lg:hidden w-[1px] h-[10px] bg-gray-300" />
          )}
          {createdBy && (
            <span
              className={cn(
                'text-sm lg:text-base text-center line-clamp-1',
                boardColumnWidth.createdBy,
              )}
            >
              {createdBy}
            </span>
          )}
          {createdBy && createdAt && (
            <span className="block lg:hidden w-[1px] h-[10px] bg-gray-300" />
          )}
          {createdAt && (
            <span
              className={cn(
                'text-sm lg:text-base text-gray-500 text-center line-clamp-1',
                boardColumnWidth.createdAt,
              )}
            >
              {createdAt}
            </span>
          )}
        </div>
        {commentCount && (
          <div className="flex lg:hidden items-center gap-[4px] shrink-0">
            <Icon src="comment.svg" />
            <span className="text-sm lg:text-base text-gray-500">{commentCount}</span>
          </div>
        )}
      </div>
    </Link>
  );
};
