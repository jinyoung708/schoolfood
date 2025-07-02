/**
 * Component: ProductSwiper.tsx
 * Description: 상품 리스트를 가로 스크롤 형태로 출력하는 스와이퍼 컴포넌트
 * Props:
 *  - title?: string (섹션 상단 제목)
 *  - activeIndex?: number | null (초기 활성화할 슬라이드 인덱스)
 * Features:
 *  - Swiper.js 기반으로 상품을 스와이프 방식으로 보여줌
 *  - 외부에서 activeIndex 변경 시 해당 인덱스로 이동
 *  - 마지막 슬라이드 도달 여부에 따라 스타일 변경
 * Usage:
 *  <ProductSwiper title="우리 반 추천 상품" activeIndex={2} />
 */

import { Button } from '@headlessui/react';
import { Icon } from '../Icon';
import { cn } from '~/shared/utils';
import { Dropdown, DropdownContent, DropdownTrigger } from '../Dropdown';

interface PostTopProps {
  title: string;
  desc?: React.ReactNode;
  created?: {
    at?: string;
    by?: string;
  };
  className?: string;
  commentCount?: number;
  height?: number;
}

export const PostInfo = ({
  title,
  desc,
  created = {},
  className,
  commentCount,
  height,
}: PostTopProps) => {
  return (
    <div className={cn(className)}>
      {title && <p className="text-22 lg:text-34 font-medium lg:mb-[8px]">{title}</p>}
      {(!!created.by || !!created.at || !!commentCount) && (
        <ul className="flex items-center gap-[12px] text-base text-gray-500 mb-[20px] lg:mb-[30px]">
          {created.by && <li>{created.by}</li>}
          {created.by && created.at && <li className="block w-[1px] h-[10px] bg-gray-300" />}
          {created.at && <li>{created.at}</li>}

          {commentCount ? (
            <>
              {created.by && created.at && <li className="block w-[1px] h-[10px] bg-gray-300" />}
              <li className="flex items-center gap-[4px] shrink-0">
                <Icon src="comment.svg" />
                <span>{commentCount}</span>
              </li>
            </>
          ) : null}
          <li className="ml-auto">
            <Dropdown
              horizontal="start"
              vertical={{ top: 0 }}
              className={cn('relative h-[24px]', className)}
            >
              <DropdownTrigger>
                <Icon src="dots.svg" alt="더보기" />
              </DropdownTrigger>
              <DropdownContent>
                <div className="flex flex-col border border-gray-400 px-[16px] py-[8px] gap-[8px] text-base font-medium text-gray-500 rounded-[8px] bg-white">
                  <Button type="button">수정</Button>
                  <Button type="button">삭제</Button>
                </div>
              </DropdownContent>
            </Dropdown>
          </li>
        </ul>
      )}
      {desc && (
        <div
          className={cn(
            'h-auto pr-[10px] scrollbar-custom2 text-lg text-gray-600',
            'max-h-[150px]', // 기본 모바일
            !height && 'lg:max-h-[120px]', // 기본 desktop
          )}
          style={height ? { maxHeight: `${height}px` } : undefined}
        >
          {desc}
        </div>
      )}
    </div>
  );
};
