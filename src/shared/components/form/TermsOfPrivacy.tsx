/**
 * Component: TermsOfPrivacy.tsx
 * Description: 개인정보 수집 · 활동 동의서 체크박스 UI 컴포넌트
 */
import { Button } from '@headlessui/react';
import { useState } from 'react';
import styles from '~/shared/css/Form.module.css';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

export const TermsOfPrivacy = () => {
  const initialState = {
    chk01: false,
    chk02: false,
    chk03: false,
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

      return updated;
    });
  };

  return (
    <div className={styles.termsWrap}>
      <p className={cn(styles.label)}>개인정보 수집 · 활동 동의서</p>
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
              개인정보수집 이용 동의 <em className={styles.red}>(필수)</em>
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
              단순 개인정보 사용 동의 <em className={styles.red}>(필수)</em>
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
              2차 가공 마케팅 사용 동의 <em className={styles.red}>(필수)</em>
            </span>
          </label>
          <Button className={styles.btn}>
            약관보기 <Icon src="arrow_right2.svg" />
          </Button>
        </li>
      </ul>
    </div>
  );
};
