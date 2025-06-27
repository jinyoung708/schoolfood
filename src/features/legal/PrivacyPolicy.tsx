/**
 * Component: PrivacyPolicy.tsx
 * Description: 개인정보취급방침 컴포넌트
 */
import { Subtop } from '~/shared/components/subtop';
import styles from '~/shared/css/Legal.module.css';

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-[30px] lg:gap-[80px]">
        <Subtop pageTitle="개인정보취급방침" breadcrumb={['HOME', '개인정보취급방침']} />
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
