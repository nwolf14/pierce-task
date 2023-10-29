import { useMutation, useQuery, useQueryClient } from 'react-query';
import { PostsDataKeys, useFetchGetWithMutation, } from './common/fetchFactory';
import { isCommentsResponseData } from './types/typeguards/assertionUtils';
import { TComment } from './types/getComments.types';

export const useFetchCommentsData = () => {
    const queryClient = useQueryClient();
    const { data } = useQuery<{ [key: string]: TComment } | undefined>(PostsDataKeys.Comments, async () => undefined, {
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage: any) => lastPage.nextPage,
    });
    const { isLoading, isError, mutateAsync } = useMutation({
        mutationFn: async (id: number) => await useFetchGetWithMutation(`/posts/${id}/replies?number=1&order_by=date`, isCommentsResponseData),
        onSuccess: (data) => {
            queryClient.setQueryData(
                PostsDataKeys.Comments,
                (previousComments: { [key: string]: TComment } = {}) => {
                    return {
                        ...previousComments,
                        [data.comments[0].post.ID]: data.comments[0]
                    };
                },
            );
        },
    });

    return { data, isLoading, isError, fetchComment: mutateAsync };
};
