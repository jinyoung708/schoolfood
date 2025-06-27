/**
 * Component: ArchiveList.tsx
 * Description: 자료실 목록 페이지 컴포넌트, 검색 결과 페이지에서만 사용
 */

import { BoardHeader } from '~/shared/components/board/BoardHeader';
import { BoardItem } from '~/shared/components/board/BoardItem';
import { cn } from '~/shared/utils';

interface ArchiveBoardProps {
  className?: string;
}

export const ArchiveBoard = ({ className }: ArchiveBoardProps) => {
  return (
    <div className={cn(className)}>
      <BoardHeader type="archive" />
      <ul>
        <li>
          <BoardItem
            id={22}
            link="/archive/detail"
            category="자료실"
            title="24년 동계 방학 중 공급중단 품목 안내"
            createdAt="2023.10.01 12:36"
            isNew
          />
        </li>
        <li>
          <BoardItem
            id={21}
            link="/archive/detail"
            category="자료실"
            title="프레시웨이 행사 소개합니다"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={20}
            link="/archive/detail"
            category="자료실"
            title="상단 고정 게시물"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={19}
            link="/archive/detail"
            category="자료실"
            title="식생활안전관리 공지"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={18}
            link="/archive/detail"
            category="자료실"
            title="한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={17}
            link="/archive/detail"
            category="FAQ"
            title="한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍"
            createdAt="2023.10.01 12:36"
            isNew
          />
        </li>
        <li>
          <BoardItem
            id={16}
            link="/archive/detail"
            category="FAQ"
            title="CJ프레시웨이 상품 안내"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={15}
            link="/archive/detail"
            category="FAQ"
            title="CJ프레시웨이 상품 안내"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={14}
            link="/archive/detail"
            category="FAQ"
            title="CJ프레시웨이 상품 안내"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={13}
            link="/archive/detail"
            category="FAQ"
            title="CJ프레시웨이 상품 안내"
            createdAt="2023.10.01 12:36"
          />
        </li>
      </ul>
    </div>
  );
};
