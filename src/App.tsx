import PostsDataProvider from './common/components/PostsDataProvider/PostsDataProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PostsSection } from './components/PostsSection/PostsSection';
import { CommentsDataProvider } from './common/components/CommentsDataProvider/CommentsDataProvider';
import { GlobalErrorBoundary } from './common/components/GlobalErrorBoundary/GlobalErrorBoundary';
import { Container, CssBaseline } from '@mui/material';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <PostsDataProvider>
          <CommentsDataProvider>
            <CssBaseline />
            <Container maxWidth="lg">
              <PostsSection />
            </Container>
          </CommentsDataProvider>
        </PostsDataProvider>
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
