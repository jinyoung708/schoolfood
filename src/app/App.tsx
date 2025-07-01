import '~/shared/css/global.css';
import { useEffect, useState } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import Routes from '~/routes/Router';
import { useApiError } from './error/useApiError';
import { useNetworkOffline } from './error/useNetworkOffline';
import { NetworkErrorPage } from '~/pages/error';
import { PageTitleUpdater } from '~/shared/utils';
import { HeaderProvider } from '~/shared/context/HeaderContext';

const App = () => {
  useEffect(() => {
    document.title = import.meta.env.VITE_WINDOW_TITLE;
  }, []);

  const isNetworkOffline = useNetworkOffline();
  const { handleError } = useApiError();

  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        mutations: {
          onError: handleError,
          networkMode: 'always',
        },
        queries: {
          networkMode: 'always',
        },
      },
      queryCache: new QueryCache({
        onError: handleError,
      }),
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HeaderProvider>
        {isNetworkOffline && <NetworkErrorPage />}
        <BrowserRouter basename="/schoolfood">
          <PageTitleUpdater />
          <Routes />
        </BrowserRouter>
      </HeaderProvider>
    </QueryClientProvider>
  );
};

export default App;
