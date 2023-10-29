import axios from 'axios';
import { GuardType } from '../../types/typeguards/guardType';
import { QueryFunctionContext } from 'react-query';
import { ApiErrors } from './errors';
import { isSuccessHttpCode } from '../../utils/http.utils';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
});

type FetchFactoryReturn<ResponseData> = (context: QueryFunctionContext) => Promise<ResponseData>;

export enum PostsDataKeys {
    Posts = 'PostsDataKeys.Posts',
    Comments = 'PostsDataKeys.Comments',
};

export const useFetchGetWithQuery = <ResponseData>(requestUrl: string, isType: GuardType<ResponseData>): FetchFactoryReturn<ResponseData> => {
    return async () => await useFetchGet(requestUrl, isType);
};

export const useFetchGetWithMutation = async <ResponseData>(requestUrl: string, isType: GuardType<ResponseData>): Promise<ResponseData> => {
    return await useFetchGet(requestUrl, isType);
};

async function useFetchGet<ResponseData>(requestUrl: string, isType: GuardType<ResponseData>): Promise<ResponseData> {
    const response = await apiClient.get(requestUrl);

    if (!isSuccessHttpCode(response.status)) {
        throw new Error(ApiErrors.NonSuccessResponseCode);
    }

    if (!isType(response.data)) {
        throw new Error(ApiErrors.ValidationError);
    }

    return response.data;
}
