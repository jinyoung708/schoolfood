// eslint-disable-next-line import/no-extraneous-dependencies
import { RouteObject } from 'react-router-dom';

// Layouts
import { MainLayout, SubLayout, CategoryLayout } from '~/features/layouts';

// Error Pages
import { Error404Page, Maintenance, NetworkErrorPage } from '~/pages/error';

// Public Pages
import { LoginPage } from '~/pages/login';
import { JoinPage } from '~/pages/join';
import { ModalPopupPage } from '~/pages/modal';
import {
  EmailRejectionPolicyPage,
  LegalNoticePage,
  PrivacyPolicyPage,
  TermsOfServicePage,
} from '~/pages/legal';

// 메인
import { HomePage } from '~/pages/home';

// 카테고리
import { CategoryListPage, CategoryDetailPage } from '~/pages/category';

// 신상품
import { ProductNewPage, ProductPage } from '~/pages/product';

// 레시피
import { RecipeDetailPage, RecipePage, RecipeVideoListPage } from '~/pages/recipe';

// 월간행사
import { MonthlyEventPage } from '~/pages/monthly';

// 커뮤니티
import { QnaListPage, QnaDetailPage, QnaWritePage } from '~/pages/qna';
import { NoticeDetailPage, NoticeListPage } from '~/pages/notice';
import { TipDetailPage, TipListPage, TipWritePage } from '~/pages/tip';
import { ArchiveDetailPage, ArchiveListPage } from '~/pages/archive';
import { SchoolDetailPage, SchoolPage, SchoolWritePage } from '~/pages/school';

// 이벤트
import { EventDetailPage, EventListPage, EndedEventListPage } from '~/pages/event';

// 통합검색
import { SearchPage } from '~/pages/search';

// 마이페이지
import { EditProfilePage, FavoritesPage, MyPostsPage } from '~/pages/mypage';

// Others
import { PublishPage } from '~/pages/publish';

type CustomChildRouteObject = RouteObject & {
  title?: string;
  auth?: boolean;
};

type CustomRouteObject = RouteObject & {
  title?: string;
  auth?: boolean;
  children?: CustomChildRouteObject[];
};

export const routes: CustomRouteObject[] = [
  // 메인 레이아웃
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        title: 'Home',
        element: <HomePage />,
      },
    ],
  },

  // 서브 레이아웃
  {
    path: '/',
    element: <SubLayout />,
    children: [
      // 회원가입
      { path: '/login', title: '로그인', element: <LoginPage /> },
      { path: '/join', title: '회원가입', element: <JoinPage /> },
      { path: '/modal', element: <ModalPopupPage /> },

      // 카테고리
      { path: '/category/detail', title: '상품상세', element: <CategoryDetailPage /> },

      // 신상품
      { path: '/product', title: '메인상품', element: <ProductPage /> },
      { path: '/product/new', title: '신상품', element: <ProductNewPage /> },

      // 레시피
      { path: '/recipe', title: '추천 레시피', element: <RecipePage /> },
      { path: '/recipe/detail', title: '레시피 상세', element: <RecipeDetailPage /> },
      { path: '/recipe/video', title: '동영상 레시피', element: <RecipeVideoListPage /> },

      // 월별 행사지
      { path: '/monthly', title: '월별 행사지', element: <MonthlyEventPage /> },

      // 자료실
      { path: '/archive', title: '자료실', element: <ArchiveListPage /> },
      { path: '/archive/detail', title: '자료실 상세', element: <ArchiveDetailPage /> },

      // 상품사용 꿀팁
      { path: '/tip', title: '상품사용 꿀팁', element: <TipListPage /> },
      { path: '/tip/detail', title: '상품사용 꿀팁 상세', element: <TipDetailPage /> },
      { path: '/tip/write', title: '상품사용 꿀팁 글쓰기', element: <TipWritePage /> },

      // Q&A
      { path: '/qna', title: 'Q&A', element: <QnaListPage /> },
      { path: '/qna/detail', title: 'Q&A 상세', element: <QnaDetailPage /> },
      { path: '/qna/write', title: 'Q&A 글쓰기', element: <QnaWritePage /> },

      // 우리학교 급식자랑
      { path: '/school', title: '우리학교 급식자랑', element: <SchoolPage /> },
      { path: '/school/detail', title: '우리학교 급식자랑 상세', element: <SchoolDetailPage /> },
      { path: '/school/write', title: '우리학교 급식자랑 글쓰기', element: <SchoolWritePage /> },

      // 공지사항
      { path: '/notice', title: '공지사항', element: <NoticeListPage /> },
      { path: '/notice/detail', title: '공지사항 상세', element: <NoticeDetailPage /> },

      // 이벤트
      { path: '/event', title: '진행중인 이벤트', element: <EventListPage /> },
      { path: '/endedEvent', title: '종료된 이벤트', element: <EndedEventListPage /> },
      { path: '/event/detail', title: '진행중인 이벤트 상세', element: <EventDetailPage /> },

      // 검색
      { path: '/search', element: <SearchPage /> },

      // 법적 고지
      { path: '/legal/privacy', title: '개인정보취급방침', element: <PrivacyPolicyPage /> },
      { path: '/legal/terms', title: '이용약관', element: <TermsOfServicePage /> },
      { path: '/legal/notice', title: '법적고지', element: <LegalNoticePage /> },
      {
        path: '/legal/email',
        title: '이메일 무단수집 거부',
        element: <EmailRejectionPolicyPage />,
      },

      // 마이페이지
      { path: '/mypage', title: '마이페이지', element: <FavoritesPage /> },
      { path: '/mypage/post', title: '마이페이지', element: <MyPostsPage /> },
      { path: '/mypage/edit', title: '마이페이지', element: <EditProfilePage /> },

      // 에러 페이지
      { path: '/error1', title: '', element: <Error404Page /> },
      { path: '/error2', title: '', element: <NetworkErrorPage /> },
      { path: '/error3', title: '', element: <Maintenance /> },
    ],
  },

  // 카테고리 레이아웃
  {
    path: '/',
    element: <CategoryLayout />,
    children: [
      { path: '/category/list', title: '핫도그·만두·냉동기타', element: <CategoryListPage /> },
    ],
  },

  // 퍼블리싱 전용
  { path: '/publish', element: <PublishPage /> },
];
