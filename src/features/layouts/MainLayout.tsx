import { Outlet } from 'react-router-dom';

// components
import { Header } from '~/features/header';
import { Footer } from '~/features/footer';

export const MainLayout = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col relative bg-white">
      <Header />
      <div className="grow w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
