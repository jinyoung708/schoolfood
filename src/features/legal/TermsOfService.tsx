/**
 * Component: TermsOfService.tsx
 * Description: 이용약관 컴포넌트
 */
import { Subtop } from '~/shared/components/subtop';
import styles from '~/shared/css/Legal.module.css';

export const TermsOfService = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop pageTitle="이용약관" breadcrumb={['HOME', '이용약관']} />
        <div className={styles.legalWrap}>
          <p>
            본 서비스는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고
            있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};
