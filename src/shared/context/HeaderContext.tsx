import React, { createContext, useState, useContext, ReactNode, useMemo, useCallback } from 'react';

interface HeaderContextProps {
  isHeaderFixed: boolean;
  setIsHeaderFixed: React.Dispatch<React.SetStateAction<boolean>>;
  isCategoryTabFixed: boolean;
  setIsCategoryTabFixed: React.Dispatch<React.SetStateAction<boolean>>;
  isGnbVisible: boolean;
  setIsGnbVisible: React.Dispatch<React.SetStateAction<boolean>>;
  searchActive: boolean;
  toggleSearch: () => void;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

interface HeaderProviderProps {
  children: ReactNode;
}

export const HeaderProvider = ({ children }: HeaderProviderProps) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(true);
  const [isCategoryTabFixed, setIsCategoryTabFixed] = useState(false);
  const [isGnbVisible, setIsGnbVisible] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = useCallback(() => {
    setSearchActive((prev) => !prev);
  }, []);
  const contextValue = useMemo(
    () => ({
      isHeaderFixed,
      setIsHeaderFixed,
      isCategoryTabFixed,
      setIsCategoryTabFixed,
      isGnbVisible,
      setIsGnbVisible,
      searchActive,
      toggleSearch,
    }),
    [
      isHeaderFixed,
      setIsHeaderFixed,
      isCategoryTabFixed,
      setIsCategoryTabFixed,
      isGnbVisible,
      setIsGnbVisible,
      searchActive,
      toggleSearch,
    ],
  );

  return <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>;
};

export const useHeaderContext = (): HeaderContextProps => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
};
