import { Link } from 'react-router-dom';

export const PageList = () => {
  return (
    <>
      <style>{`
        .tbl_list { border-top: 2px solid #ea002c; margin-top: 10px; font-size: 11px; }
        .tbl_list th { padding: 10px; font-size:14px; font-weight: bold;text-align: center;  border-right: 1px solid #ddd; border-bottom:1px solid #ddd; }
        .tbl_list th:last-child, .tbl_list td:last-child { border-right:0; }
        .tbl_list td { padding: 10px; text-align: center; line-height: 16px; border-right: 1px solid #ddd; border-bottom:1px solid #ddd; }
        .tbl_list td a { color: #e79300; }
        .tbl_list td.tit { font-size:15px !important; color: #333 !important; background: #eee; text-align: left; padding-left: 20px; font-weight: bold; border-top:1px solid #ddd; border-bottom: 2px dashed #ddd; }
        .tbl_list td.tit span { font-size:12px; color: #ea002c; font-weight: bold; padding-left: 10px; }
        .tbl_list td.tit span:before { content: '( '; }
        .tbl_list td.tit span:after { content: ' )'; }
        .tbl_list td.t_file { color: #333; font-weight: bold; }   
        .tbl_list td.t_file:after, .tbl_list td.link a:after { content: '.tsx'; }
        .tbl_list td:last-child { font-size:11px;  color: #ea002c; text-align: left; line-height: 18px; }
      `}</style>

      <div className=" w-full">
        <table className="tbl_list w-full">
          <colgroup>
            <col width="180px" />
            <col width="200px" />
            <col width="200px" />
            <col width="150px" />
            <col width="150px" />
            <col width="150px" />
            <col width="200px" />
            <col width="350px" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th>1depth</th>
              <th>2depth</th>
              <th>3depth</th>
              <th>4depth</th>
              <th>5depth</th>
              <th>구분</th>
              <th>파일명</th>
              <th>경로</th>
              <th>비고</th>
            </tr>
            {/* 메인 */}
            <tr>
              <td className="tit" colSpan={9}>
                메인<span>main</span>
              </td>
            </tr>
            <tr>
              <td>메인</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">HomeContainer</td>
              <td className="link">
                <Link to="/" target="_blank">
                  /features/home/HomeContainer
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td rowSpan={3}>에러</td>
              <td />
              <td />
              <td />
              <td />
              <td>요청하신 페이지..</td>
              <td className="t_file">Error404Page</td>
              <td className="link">
                <Link to="/error1" target="_blank">
                  /pages/error/ui/Error404Page
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td>일시적으로 서비스..</td>
              <td className="t_file">NetworkErrorPage</td>
              <td className="link">
                <Link to="/error2" target="_blank">
                  /pages/error/ui/NetworkErrorPage
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td>서비스 점검 중..</td>
              <td className="t_file">Maintenance</td>
              <td className="link">
                <Link to="/error3" target="_blank">
                  /pages/error/ui/Maintenance
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>로그인</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">LoginForm</td>
              <td className="link">
                <Link to="/login" target="_blank">
                  /features/login/LoginForm
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>회원가입</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">JoinForm</td>
              <td className="link">
                <Link to="/join" target="_blank">
                  /features/join/JoinForm
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>모달팝업</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">ModalPopup</td>
              <td className="link">
                <Link to="/modal" target="_blank">
                  /features/modal/ModalPopup
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>개인정보취급방침</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">PrivacyPolicy</td>
              <td className="link">
                <Link to="/legal/privacy" target="_blank">
                  /features/legal/PrivacyPolicy
                </Link>
              </td>
              <td>컨텐츠 X</td>
            </tr>
            <tr>
              <td>이용약관</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">TermsOfService</td>
              <td className="link">
                <Link to="/legal/terms" target="_blank">
                  /features/legal/TermsOfService
                </Link>
              </td>
              <td>컨텐츠 X</td>
            </tr>
            <tr>
              <td>법적고지</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">LegalNotice</td>
              <td className="link">
                <Link to="/legal/notice" target="_blank">
                  /features/legal/LegalNotice
                </Link>
              </td>
              <td>컨텐츠 X</td>
            </tr>
            <tr>
              <td>이메일 무단수집 거부</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">EmailRejectionPolicy</td>
              <td className="link">
                <Link to="/legal/email" target="_blank">
                  /features/legal/EmailRejectionPolicy
                </Link>
              </td>
              <td>컨텐츠 X</td>
            </tr>

            {/* 카테고리 */}
            <tr>
              <td className="tit" colSpan={9}>
                카테고리<span>category</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>카테고리</td>
              <td>리스트</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">CategoryList</td>
              <td className="link">
                <Link to="/category/list" target="_blank">
                  /features/category/CategoryList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>상세</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">CategoryDetail</td>
              <td className="link">
                <Link to="/category/detail" target="_blank">
                  /features/category/CategoryDetail
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 월별 행사지 */}
            <tr>
              <td className="tit" colSpan={9}>
                신상품
                <span>product</span>
              </td>
            </tr>
            <tr>
              <td>메인상품</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">Product</td>
              <td className="link">
                <Link to="/product" target="_blank">
                  /features/product/Product
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>신상품</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">ProductNew</td>
              <td className="link">
                <Link to="/product/new" target="_blank">
                  /features/product/ProductNew
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 레시피 */}
            <tr>
              <td className="tit" colSpan={9}>
                레시피<span>recipe</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>추천 레시피</td>
              <td>리스트</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">RecipeList</td>
              <td className="link">
                <Link to="/recipe" target="_blank">
                  /features/recipe/RecipeList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>상세</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">RecipeDetail</td>
              <td className="link">
                <Link to="/recipe/detail" target="_blank">
                  /features/recipe/RecipeDetail
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>동영상 레시피</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">RecipeVideoList</td>
              <td className="link">
                <Link to="/recipe/video" target="_blank">
                  /features/recipe/RecipeVideoList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 월별 행사지 */}
            <tr>
              <td className="tit" colSpan={9}>
                월별 행사지
                <span>monthly</span>
              </td>
            </tr>
            <tr>
              <td>월별 행사지</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">MonthlyEvent</td>
              <td className="link">
                <Link to="/monthly" target="_blank">
                  /features/monthly/MonthlyEvent
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 자료실 */}
            <tr>
              <td className="tit" colSpan={9}>
                자료실<span>archive</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>자료실</td>
              <td>리스트</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">ArchiveList</td>
              <td className="link">
                <Link to="/archive" target="_blank">
                  /features/archive/ArchiveList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>상세</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">ArchiveDetail</td>
              <td className="link">
                <Link to="/archive/detail" target="_blank">
                  /features/archive/ArchiveDetail
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 상품사용 꿀팁 */}
            <tr>
              <td className="tit" colSpan={9}>
                상품사용 꿀팁<span>tip</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>상품사용 꿀팁</td>
              <td>리스트</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">TipList</td>
              <td className="link">
                <Link to="/tip" target="_blank">
                  /features/tip/TipList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>상세</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">TipDetail</td>
              <td className="link">
                <Link to="/tip/detail" target="_blank">
                  /features/tip/TipDetail
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>글쓰기</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">TipWrite</td>
              <td className="link">
                <Link to="/tip/write" target="_blank">
                  /features/tip/TipWrite
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* Q&A */}
            <tr>
              <td className="tit" colSpan={9}>
                Q&A<span>qna</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>Q&A 페이지</td>
              <td>리스트</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">QnaList</td>
              <td className="link">
                <Link to="/qna" target="_blank">
                  /features/qna/QnaList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>상세</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">QnaDetail</td>
              <td className="link">
                <Link to="/qna/detail" target="_blank">
                  /features/qna/QnaDetail
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>글쓰기</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">QnaWrite</td>
              <td className="link">
                <Link to="/qna/write" target="_blank">
                  /features/qna/QnaWrite
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 우리학교 급식자랑 */}
            <tr>
              <td className="tit" colSpan={9}>
                우리학교 급식자랑<span>school</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>우리학교 급식자랑</td>
              <td>리스트</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">SchoolList</td>
              <td className="link">
                <Link to="/school" target="_blank">
                  /features/school/SchoolList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>상세</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">SchoolDetail</td>
              <td className="link">
                <Link to="/school/detail" target="_blank">
                  /features/school/SchoolDetail
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>글쓰기</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">SchoolWrite</td>
              <td className="link">
                <Link to="/school/write" target="_blank">
                  /features/school/SchoolWrite
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 공지사항 */}
            <tr>
              <td className="tit" colSpan={9}>
                공지사항<span>notice</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={2}>공지사항</td>
              <td>리스트</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">NoticeList</td>
              <td className="link">
                <Link to="/notice" target="_blank">
                  /features/notice/NoticeList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>상세</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">NoticeDetail</td>
              <td className="link">
                <Link to="/notice/detail" target="_blank">
                  /features/notice/NoticeDetail
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 이벤트 */}
            <tr>
              <td className="tit" colSpan={9}>
                이벤트<span>event</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>이벤트</td>
              <td rowSpan={2}>리스트</td>
              <td>진행중인 이벤트</td>
              <td />
              <td />
              <td />
              <td className="t_file">EventList</td>
              <td className="link">
                <Link to="/event" target="_blank">
                  /features/event/EventList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>종료된 이벤트</td>
              <td />
              <td />
              <td />
              <td className="t_file">EndedEventList</td>
              <td className="link">
                <Link to="/endedEvent" target="_blank">
                  /features/event/EndedEventList
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>상세</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">EventDetail</td>
              <td className="link">
                <Link to="/event/detail" target="_blank">
                  /features/event/EventDetail
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 통합검색 */}
            <tr>
              <td className="tit" colSpan={9}>
                통합검색<span>search</span>
              </td>
            </tr>
            <tr>
              <td>통합검색</td>
              <td />
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">Search</td>
              <td className="link">
                <Link to="/search" target="_blank">
                  /features/search/Search
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>

            {/* 마이페이지 */}
            <tr>
              <td className="tit" colSpan={9}>
                마이페이지<span>mypage</span>
              </td>
            </tr>
            <tr>
              <td rowSpan={3}>마이페이지</td>
              <td>관심상품</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">Favorites</td>
              <td className="link">
                <Link to="/mypage" target="_blank">
                  /features/mypage/Favorites
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>작성한 글</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">MyPosts</td>
              <td className="link">
                <Link to="/mypage/post" target="_blank">
                  /features/mypage/MyPosts
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
            <tr>
              <td>개인정보 수정</td>
              <td />
              <td />
              <td />
              <td />
              <td className="t_file">EditProfile</td>
              <td className="link">
                <Link to="/mypage/edit" target="_blank">
                  /features/mypage/EditProfile
                </Link>
              </td>
              <td>퍼블 완료</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
