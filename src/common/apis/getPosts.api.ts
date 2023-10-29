import { useQuery } from 'react-query';
import { PostsDataKeys, useFetchGetWithQuery } from './common/fetchFactory';
import { isPostsResponseData } from './types/typeguards/assertionUtils';

export const useFetchPostsData = () => {
    return useQuery(
        [PostsDataKeys.Posts],
        useFetchGetWithQuery('/posts/?number=3&order_by=comment_count&order=DESC&fields=ID,title,content', isPostsResponseData),
        {
            refetchOnWindowFocus: false,
            getNextPageParam: (lastPage: any) => lastPage.nextPage,
        },
    );
};
