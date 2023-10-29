import { isObjectWithProperty } from "../../../types/typeguards/assertionUtils";
import { TGetCommentsResponseData } from "../getComments.types";
import { TGetPostsResponseData } from "../getPosts.types";

export function isPostsResponseData(value: unknown): value is TGetPostsResponseData {
    return isObjectWithProperty(value, 'posts') &&
        isObjectWithProperty(value, 'meta') && 
        isObjectWithProperty(value, 'found');
};

export function isCommentsResponseData(value: unknown): value is TGetCommentsResponseData {
    return isObjectWithProperty(value, 'comments');
};
