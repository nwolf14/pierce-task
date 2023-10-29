import React, { createContext } from 'react';
import { useFetchPostsData } from '../../apis/getPosts.api';
import { TGetPostsResponseData } from '../../apis/types/getPosts.types';
import { Loader } from '../Loader/Loader';

export const postsContext = createContext<null | TGetPostsResponseData['posts']>(null);

const PostsDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, isError, data } = useFetchPostsData();

  if (isLoading || !data) {
    return <Loader size={80} />;
  }

  if (isError) {
    throw new Error('could not load posts data, please try again later...');
  }

  return <postsContext.Provider value={data.posts}>{children}</postsContext.Provider>;
};

export default PostsDataProvider;

export const usePostsData = (): TGetPostsResponseData['posts'] => {
  const value = React.useContext(postsContext);

  if (!value) {
    throw new Error('usePostsData must be used inside PostsDataProvider');
  }

  return value;
};
