import React, { createContext } from 'react';
import { useFetchCommentsData } from '../../apis/getComments.api';
import { TCommentsDataProviderContext, TSingleCommentDataProviderContext } from './CommentsDataProvider.types';

export const commentsContext = createContext<null | TCommentsDataProviderContext>(null);

export const CommentsDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading, isError, data: comments, fetchComment } = useFetchCommentsData();

  return (
    <commentsContext.Provider value={{ isLoading, isError, fetchComment, comments }}>
      {children}
    </commentsContext.Provider>
  );
};

export const useCommentsData = (): TCommentsDataProviderContext => {
  const context = React.useContext(commentsContext);

  if (!context) {
    throw new Error('useCommentsData must be used inside CommentsDataProvider');
  }

  return context;
};

export const useSingleCommentData = (postId: number): TSingleCommentDataProviderContext => {
  const context = useCommentsData();
  const comment = context.comments ? context.comments[postId] : undefined;

  return { ...context, comment };
};
