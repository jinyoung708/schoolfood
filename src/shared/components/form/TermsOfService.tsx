/**
 * Component: TermsOfService.tsx
 * Description: 이용약관 동의 체크박스 UI 컴포넌트
 */
import { Button } from '@headlessui/react';
import { useState } from 'react';
import styles from '~/shared/css/Form.module.css';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

export const TermsOfService = () => {
  const initialState = {
    chk01: false,
    chk02: false,
    chk03: false,
    chk04: false,
    chk05: false, // 마케팅 수신
    chk06: false, // sms
    chk07: false, // 이메일
  };

  const [checks, setChecks] = useState(initialState);

  const isAllChecked = Object.values(checks).every(Boolean);

  const handleAllChange = (checked: boolean) => {
    const newChecks = Object.fromEntries(
      Object.keys(checks).map((key) => [key, checked]),
    ) as typeof checks;
    setChecks(newChecks);
  };

  const handleChange = (key: keyof typeof checks) => {
    setChecks((prev) => {
      const updated = { ...prev, [key]: !prev[key] };

      // 마케팅 수신 동의 클릭 시 SMS/이메일도 동기화
      if (key === 'chk05') {
        updated.chk06 = !prev[key]; // sms
        updated.chk07 = !prev[key]; // email
      }

      return updated;
    });
  };

  return (
    <div className={styles.termsWrap}>
      <p className={cn(styles.required, styles.label)}>이용약관 동의</p>
      <ul className={styles.checkList}>
        <li className="flex gap-x-[5px] items-start">
          <label htmlFor="chkAll">
            <input
              type="checkbox"
              id="chkAll"
              checked={isAllChecked}
              onChange={(e) => handleAllChange(e.target.checked)}
              className="sr-only"
            />
            <span>전체동의</span>
          </label>
        </li>
        <li className="flex gap-x-[5px] items-start">
          <label htmlFor="chk01">
            <input
              type="checkbox"
              id="chk01"
              checked={checks.chk01}
              onChange={() => handleChange('chk01')}
              className="sr-only"
            />
            <span>
              만 14세 이상입니다. <em className={styles.red}>(필수)</em>
            </span>
          </label>
          <Button className={styles.btn}>
            약관보기 <Icon src="arrow_right2.svg" />
          </Button>
        </li>
        <li className="flex gap-x-[5px] items-start">
          <label htmlFor="chk02">
            <input
              type="checkbox"
              id="chk02"
              checked={checks.chk02}
              onChange={() => handleChange('chk02')}
              className="sr-only"
            />
            <span>
              이용 약관 동의 <em className={styles.red}>(필수)</em>
            </span>
          </label>
          <Button className={styles.btn}>
            약관보기 <Icon src="arrow_right2.svg" />
          </Button>
        </li>
        <li className="flex gap-x-[5px] items-start">
          <label htmlFor="chk03">
            <input
              type="checkbox"
              id="chk03"
              checked={checks.chk03}
              onChange={() => handleChange('chk03')}
              className="sr-only"
            />
            <span>
              개인정보수집 이용 동의 <em className={styles.red}>(필수)</em>
            </span>
          </label>
          <Button className={styles.btn}>
            약관보기 <Icon src="arrow_right2.svg" />
          </Button>
        </li>
        <li className="flex gap-x-[5px] items-start">
          <label htmlFor="chk04">
            <input
              type="checkbox"
              id="chk04"
              checked={checks.chk04}
              onChange={() => handleChange('chk04')}
              className="sr-only"
            />
            <span>
              개인정보 처리 및 위탁 동의 <em>(선택)</em>
            </span>
          </label>
        </li>
        <li>
          <label htmlFor="chk05">
            <input
              type="checkbox"
              id="chk05"
              checked={checks.chk05}
              onChange={() => handleChange('chk05')}
              className="sr-only"
            />
            <span>
              마케팅 수신 동의 <em>(선택)</em>
            </span>
          </label>
          <div className="flex gap-[40px] mt-[20px] pl-[32px]">
            <div>
              <label htmlFor="chk06">
                <input
                  type="checkbox"
                  id="chk06"
                  checked={checks.chk06}
                  onChange={() => handleChange('chk06')}
                  className="sr-only"
                />
                <span>SMS</span>
              </label>
            </div>
            <div>
              <label htmlFor="chk07">
                <input
                  type="checkbox"
                  id="chk07"
                  checked={checks.chk07}
                  onChange={() => handleChange('chk07')}
                  className="sr-only"
                />
                <span>이메일</span>
              </label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
