/**
 * Component: InputSearch.tsx
 * Description: 학교명 검색 입력 컴포넌트
 * Usage:
 *  <InputSearch />
 */
import { Button, Input } from '@headlessui/react';
import { useState, ChangeEvent } from 'react';
import styles from '~/shared/css/Form.module.css';
import { cn } from '~/shared/utils';
import { Icon } from '../Icon';

interface InputSearchProps {
  label?: string;
  placeholder?: string;
  className?: string;
}

export const InputSearch = ({ label, placeholder, className }: InputSearchProps) => {
  const [keyword, setKeyword] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setShowResults(false);
  };

  const handleClear = () => {
    setKeyword('');
    setShowResults(false);
  };

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      setShowResults(true);
    }
  };

  return (
    <div className={cn(styles.searchWrap, className)}>
      <p className={cn(styles.required, styles.label)}>{label || '근무처'}</p>
      <div className="relative">
        <Input
          value={keyword}
          onChange={handleChange}
          className="w-full"
          placeholder={placeholder || '학교명을 입력하세요'}
        />
        <div className={styles.btnWrap}>
          {keyword !== '' && (
            <Button onClick={handleClear} className={styles.btnDelete}>
              <Icon src="delete.svg" alt="삭제" />
            </Button>
          )}
          <Button onClick={handleSearch} className={styles.btnSearch}>
            <Icon src="search_gray.svg" alt="검색" />
          </Button>
        </div>
        {showResults && (
          <div className={cn('scrollbar-custom max-h-[192px]', styles.searchList)}>
            <ul>
              <li>
                <a href="">[서울특별시 마포구] 상암고등학교</a>
              </li>
              <li>
                <a href="">[서울특별시 마포구] 상암중학교</a>
              </li>
              <li>
                <a href="">[서울특별시 마포구] 상암초등학교</a>
              </li>
              <li>
                <a href="">[전라남도 여수시] 여수상암초등학교</a>
              </li>
              <li>
                <a href="">[전라남도 여수시] 여수상암초등학교묘도</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
