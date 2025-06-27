/**
 * Component: QnaBoard.tsx
 * Description: Q&A 리스트를 렌더링하는 컴포넌트
 */
import { BoardHeader } from '~/shared/components/board/BoardHeader';
import { BoardItem } from '~/shared/components/board/BoardItem';
import { cn } from '~/shared/utils';

interface QnaBoardProps {
  className?: string;
}

export const QnaBoard = ({ className }: QnaBoardProps) => {
  return (
    <div className={cn(className)}>
      <BoardHeader />
      <ul>
        <li>
          <BoardItem
            id={1}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다.Q&A 게시판 제목입니다.Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
            isPinned
          />
        </li>
        <li>
          <BoardItem
            id={9}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다. Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
            isNew
          />
        </li>
        <li>
          <BoardItem
            id={8}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
          />
        </li>
        <li>
          <BoardItem
            id={7}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
          />
        </li>
        <li>
          <BoardItem
            id={6}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
          />
        </li>
        <li>
          <BoardItem
            id={5}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
          />
        </li>
        <li>
          <BoardItem
            id={4}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
          />
        </li>
        <li>
          <BoardItem
            id={3}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
          />
        </li>
        <li>
          <BoardItem
            id={2}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
          />
        </li>
        <li>
          <BoardItem
            id={1}
            link="/qna/detail"
            category="Q&A"
            title="Q&A 게시판 제목입니다."
            createdBy="사용자1"
            createdAt="2023.10.01 12:36"
            commentCount={5}
          />
        </li>
      </ul>
    </div>
  );
};
