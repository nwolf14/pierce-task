import { CommentsDataProvider } from '../common/components/CommentsDataProvider/CommentsDataProvider';
import { Page } from '../common/components/Page/Page';
import PostsDataProvider from '../common/components/PostsDataProvider/PostsDataProvider';
import { PostsSection } from '../components/PostsSection/PostsSection';

export const HomePage: React.FC = () => {
  return (
    <PostsDataProvider>
      <CommentsDataProvider>
        <Page>
          <PostsSection />
        </Page>
      </CommentsDataProvider>
    </PostsDataProvider>
  );
};
