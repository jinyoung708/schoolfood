/**
 * Component: NoticeBoard.tsx
 * Description: 공지사항 리스트를 렌더링하는 컴포넌트
 */
import { BoardHeader } from '~/shared/components/board/BoardHeader';
import { BoardItem } from '~/shared/components/board/BoardItem';
import { cn } from '~/shared/utils';

interface QnaBoardProps {
  className?: string;
}

export const NoticeBoard = ({ className }: QnaBoardProps) => {
  return (
    <div className={cn(className)}>
      <BoardHeader type="notice" />
      <ul>
        <li>
          <BoardItem
            link="/notice/detail"
            category="공지"
            title="24년 동계 방학 중 공급중단 품목 안내"
            createdAt="2023.10.01 12:36"
            isPinned
            isNew
          />
        </li>
        <li>
          <BoardItem
            link="/notice/detail"
            category="공지"
            title="프레시웨이 행사 소개합니다"
            createdAt="2023.10.01 12:36"
            isPinned
          />
        </li>
        <li>
          <BoardItem
            link="/notice/detail"
            category="공지"
            title="상단 고정 게시물"
            hasAttachments
            createdAt="2023.10.01 12:36"
            isPinned
          />
        </li>
        <li>
          <BoardItem
            id={19}
            link="/notice/detail"
            category="공지"
            title="식생활안전관리 공지"
            hasAttachments
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={18}
            link="/notice/detail"
            category="공지"
            title="한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍"
            hasAttachments
            createdAt="2023.10.01 12:36"
            isNew
          />
        </li>
        <li>
          <BoardItem
            id={17}
            link="/notice/detail"
            category="FAQ"
            title="한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍한줄 트리밍"
            hasAttachments
            createdAt="2023.10.01 12:36"
            isNew
          />
        </li>
        <li>
          <BoardItem
            id={16}
            link="/notice/detail"
            category="FAQ"
            title="CJ프레시웨이 상품 안내"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={15}
            link="/notice/detail"
            category="FAQ"
            title="CJ프레시웨이 상품 안내"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={14}
            link="/notice/detail"
            category="FAQ"
            title="CJ프레시웨이 상품 안내"
            createdAt="2023.10.01 12:36"
          />
        </li>
        <li>
          <BoardItem
            id={13}
            link="/notice/detail"
            category="FAQ"
            title="CJ프레시웨이 상품 안내"
            createdAt="2023.10.01 12:36"
          />
        </li>
      </ul>
    </div>
  );
};
