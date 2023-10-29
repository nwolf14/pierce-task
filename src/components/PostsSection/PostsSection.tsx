import React, { useCallback, useMemo } from 'react';
import { usePostsData } from '../../common/components/PostsDataProvider/PostsDataProvider';
import { PostList } from './PostList/PostList';
import { Box, Button } from '@mui/material';
import { useCommentsData } from '../../common/components/CommentsDataProvider/CommentsDataProvider';

export const PostsSection: React.FC = () => {
  const posts = usePostsData();
  const { isLoading, comments, fetchComment } = useCommentsData();

  const handleButtonClick = useCallback(async () => {
    for (let i = 0; i < posts.length; i++) {
      await fetchComment(posts[i].ID);
    }
  }, [posts, fetchComment]);

  const isButtonDisabled = useMemo(() => {
    return isLoading || Boolean(comments);
  }, [isLoading, comments]);

  return (
    <Box component="section">
      <Box marginBottom={2}>
        <Button onClick={handleButtonClick} disabled={isButtonDisabled} variant="contained">
          Load posts latest comment
        </Button>
      </Box>
      <PostList posts={posts} />
    </Box>
  );
};
