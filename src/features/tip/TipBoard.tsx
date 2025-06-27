/**
 * Component: TipBoard.tsx
 * Description: 꿀팁 게시판 컴포넌트
 */
import { BoardHeader } from '~/shared/components/board/BoardHeader';
import { BoardItem } from '~/shared/components/board/BoardItem';
import { cn } from '~/shared/utils';

interface TipBoardProps {
  className?: string;
}

export const TipBoard = ({ className }: TipBoardProps) => {
  return (
    <div className={cn(className)}>
      <BoardHeader />
      <ul>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="상품사용 꿀팁"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
        <li>
          <BoardItem
            id={22}
            link="/tip/detail"
            category="선생님만의 활용레시피"
            title="상품사용 꿀팁 공유"
            createdBy="사용자1"
            createdAt="2023-10-01 12:36"
            commentCount={21}
          />
        </li>
      </ul>
    </div>
  );
};
