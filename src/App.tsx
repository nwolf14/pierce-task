import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalErrorBoundary } from './common/components/GlobalErrorBoundary/GlobalErrorBoundary';
import { HomePage } from './pages/HomePage';

import './App.scss';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={queryClient}>
        {/* In normal coditions routing would be added */}
        <HomePage />
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
};
