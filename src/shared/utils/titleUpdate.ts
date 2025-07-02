import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '~/routes/routes';

export const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    let currentTitle;
    routes.forEach((element) => {
      if (element.children) {
        element.children.forEach((child: any) => {
          if (child.path === location.pathname) {
            currentTitle = child.title;
          }
        });
      } else if (element.path === location.pathname) {
        currentTitle = element.title;
      }
    });

    if (currentTitle) {
      document.title = currentTitle;
    }
  }, [location]);

  return null;
};
