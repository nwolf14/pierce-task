import { TPost } from "./getPosts.types";

export type TComment = {
    ID: number,
    date: string,
    content: string
    post: Pick<TPost, 'ID'>,
    author: { name: string },
}

export type TGetCommentsResponseData = {
    comments: TComment[];
};
