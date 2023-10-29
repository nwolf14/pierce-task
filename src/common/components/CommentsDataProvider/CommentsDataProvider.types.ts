import { TComment, TGetCommentsResponseData } from "../../apis/types/getComments.types";

export type TCommentsObj = {
    [key: string]: TComment;
};

export type TCommentsDataProviderContext = {
    comments: TCommentsObj | undefined,
    isLoading: boolean;
    isError: boolean;
    fetchComment(id: number): Promise<TGetCommentsResponseData>;
};

export type TSingleCommentDataProviderContext = Pick<TCommentsDataProviderContext, 'isError' | 'isLoading'> & {
    comment: TComment | undefined,
};
