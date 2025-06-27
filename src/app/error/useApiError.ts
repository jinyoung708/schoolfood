import axios from 'axios';
import { useCallback, useMemo } from 'react';

const toastSettings = {
  // position: 'bottom-center' as ToastPosition,
  autoClose: 3000,
  hideProgressBar: true,
  pauseOnHover: false,
  draggable: false,
};

export const useApiError = () => {
  // 응답 코드별 핸들러를 정의해 둔 객체
  const statusHandlers = useMemo(
    () => ({
      400: (msg: string) => {
        console.log(`400 Error:: ${msg}`, toastSettings);
      },
      401: (msg: string, errorCode: string) => {
        if (errorCode === 'ER-COMM-1001') {
          console.log('로그인 세션이 만료가 되었습니다. 다시 로그인 해주세요.', toastSettings);
        } else {
          console.log(`401 Error:: ${msg}`, toastSettings);
        }
      },
      403: (msg: string) => console.log(`403 Error:: ${msg}`, toastSettings),
      404: (msg: string) => console.log(`404 Error:: ${msg}`, toastSettings),
      500: () => console.log('500 Error:: 서버 오류가 발생했습니다.', toastSettings),
      default: () => console.log('서버에서 알 수 없는 오류가 발생했습니다.', toastSettings),
    }),
    [],
  );

  const handleError = useCallback(
    (error: unknown) => {
      if (axios.isAxiosError(error)) {
        // Axios 에러인 경우
        if (error.response) {
          console.log(error.response);
          // // error.response가 존재하면
          const httpStatus = error.response?.status; // axios 에러 코드
          const errorResponse = error.response?.data;
          const httpMessage = errorResponse.message
            ? errorResponse.message
            : errorResponse.head.message; // 응답 메시지
          const httpErrorCode = errorResponse.error
            ? errorResponse.error || null
            : errorResponse.head.code || null; // 응답 코드
          // let httpMessage = ''; // 응답 메시지
          // let httpErrorCode = ''; // 응답 코드
          // if (errorResponse.head.code !== undefined) {
          //   httpMessage = errorResponse.head.message; // 응답 메시지
          //   httpErrorCode = errorResponse.head.code || null; // 응답 코드
          // } else {

          // }

          // 유효하지 않은 http status면 default 함수 실행
          const handle =
            httpStatus && statusHandlers[httpStatus as keyof typeof statusHandlers]
              ? statusHandlers[httpStatus as keyof typeof statusHandlers]
              : statusHandlers.default;

          handle(httpMessage, httpErrorCode); // 의도한 에러 처리
          // toast.clearWaitingQueue();
        } else {
          // error.response가 존재하지 않는 경우에는 서버 연결이 원활하지 않은 것으로 간주
          console.log('서버 연결이 원활하지 않습니다.', toastSettings);
          // toast.clearWaitingQueue();
        }
      } else {
        // Axios 에러가 아닌 경우에는 네트워크 연결 오류나 기타 오류로 간주
        console.log('네트워크 연결 오류 또는 기타 오류가 발생했습니다', toastSettings);
        // toast.clearWaitingQueue();
      }
    },
    [statusHandlers],
  );

  return { handleError };
};
