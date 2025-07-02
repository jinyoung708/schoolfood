/**
 * Component: CategoryMenu.tsx
 * Description: 헤더 내 카테고리 메뉴 컴포넌트.
 */
import { Link } from 'react-router-dom';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { cn } from '~/shared/utils';
import styles from '~/shared/css/Header.module.css';
import { useHeaderContext } from '~/shared/context/HeaderContext';

const categories = [
  {
    title: '육가공',
    iconClass: styles.ico1,
    link: '/category/list',
    subMenu: [
      { title: '3DEPTH A1', link: '/category/list' },
      { title: '3DEPTH A2', link: '/category/list' },
    ],
  },
  {
    title: '계육·수산가공',
    iconClass: styles.ico2,
    link: '/category/list',
    subMenu: [
      { title: '3DEPTH B1', link: '/category/list' },
      { title: '3DEPTH B2', link: '/category/list' },
    ],
  },
  {
    title: '핫도그·만두·냉동기타',
    iconClass: styles.ico3,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH C1', link: '/category/list' }],
  },
  {
    title: '계란·치즈·두부·묵',
    iconClass: styles.ico4,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH D1', link: '/category/list' }],
  },
  {
    title: '음료류',
    iconClass: styles.ico5,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH E1', link: '/category/list' }],
  },
  {
    title: '후식류',
    iconClass: styles.ico6,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH F1', link: '/category/list' }],
  },
  {
    title: '소스·드레싱',
    iconClass: styles.ico7,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH G1', link: '/category/list' }],
  },
  {
    title: '가공기타·비식품',
    iconClass: styles.ico8,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH H1', link: '/category/list' }],
  },
  {
    title: '채식',
    iconClass: styles.ico9,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH I1', link: '/category/list' }],
  },
  {
    title: '분가공·분류',
    iconClass: styles.ico10,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH J1', link: '/category/list' }],
  },
  {
    title: '농산·수산·축산물',
    iconClass: styles.ico11,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH K1', link: '/category/list' }],
  },
  {
    title: '자연드림',
    iconClass: styles.ico12,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH L1', link: '/category/list' }],
  },
  {
    title: '중단상품',
    iconClass: styles.ico13,
    link: '/category/list',
    subMenu: [{ title: '3DEPTH M1', link: '/category/list' }],
  },
];

// Popover 내에서 open 상태를 관리하기 위한 컴포넌트
const PopoverContentWrapper = ({
  children,
  open,
  setAction,
}: {
  children: React.ReactNode;
  open: boolean;
  setAction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    setAction(open);
  }, [open, setAction]);
  return <div>{children}</div>;
};

export const CategoryMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);
  const { isHeaderFixed } = useHeaderContext();

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!isOpen) {
      handleActiveIndex(0);
    }
  }, [isOpen]);

  return (
    <Popover className={cn('relative', styles.categoryWrapper)}>
      {({ open }) => {
        return (
          <>
            <PopoverButton
              className={cn(styles.categoryBtn, open && styles.active)}
              aria-haspopup="true"
              id="category-button"
            >
              카테고리
            </PopoverButton>
            {isHeaderFixed && (
              <PopoverContentWrapper open={open} setAction={setIsOpen}>
                <PopoverPanel
                  anchor="top start"
                  className={cn('flex z-[var(--header-z)] bg-white', styles.categoryDropdown)}
                >
                  <ul className={cn(styles.categoryDepth2)}>
                    {categories.map((cat, idx) => (
                      <li
                        key={cat.title}
                        className={cn(activeIndex === idx && styles.active)}
                        onMouseEnter={() => handleActiveIndex(idx)}
                        onFocus={() => handleActiveIndex(idx)}
                      >
                        <Link to={cat.link} className={cn('rounded-full', cat.iconClass)}>
                          <span>{cat.title}</span>
                        </Link>
                        <div className={cn(styles.categoryDepth3, activeIndex === idx && 'block')}>
                          <ul className={cn()}>
                            {cat.subMenu.map((sub) => (
                              <li key={sub.title}>
                                <Link to={sub.link} className="rounded-full">
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </PopoverPanel>
              </PopoverContentWrapper>
            )}
          </>
        );
      }}
    </Popover>
  );
};
