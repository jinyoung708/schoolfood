import { matchRoutes, Outlet, useLocation } from 'react-router-dom';

// components
import { Header } from '~/features/header';
import { Footer } from '~/features/footer';
import { routes } from '~/routes/routes';
import { SubContentWrapper } from './SubContentWrapper';

export const CategoryLayout = () => {
  const location = useLocation();
  const matched = matchRoutes(routes, location);
  const currentTitle = matched?.[matched.length - 1]?.route?.title;

  return (
    <div className="w-full min-h-[100vh] flex flex-col relative bg-white">
      <Header title={currentTitle} category />
      <SubContentWrapper>
        <Outlet />
      </SubContentWrapper>
      <Footer />
    </div>
  );
};
