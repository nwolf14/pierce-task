import axios from 'axios';
import { GuardType } from '../../types/typeguards/guardType';
import { QueryFunctionContext } from 'react-query';
import { ApiErrors } from './errors';
import { isSuccessHttpCode } from '../../utils/http.utils';

const apiClient = axios.create({
  baseURL: process.env.BASE_API_URL,
});

type FetchFactoryReturn<ResponseData> = (context: QueryFunctionContext) => Promise<ResponseData>;

export enum PostsDataKeys {
  Posts = 'PostsDataKeys.Posts',
  Comments = 'PostsDataKeys.Comments',
}

export const fetchGetWithQuery = <ResponseData>(
  requestUrl: string,
  isType: GuardType<ResponseData>,
): FetchFactoryReturn<ResponseData> => {
  return async () => await fetchGet(requestUrl, isType);
};

export const fetchGetWithMutation = async <ResponseData>(
  requestUrl: string,
  isType: GuardType<ResponseData>,
): Promise<ResponseData> => {
  return await fetchGet(requestUrl, isType);
};

async function fetchGet<ResponseData>(requestUrl: string, isType: GuardType<ResponseData>): Promise<ResponseData> {
  const response = await apiClient.get(requestUrl);

  if (!isSuccessHttpCode(response.status)) {
    throw new Error(ApiErrors.NonSuccessResponseCode);
  }

  if (!isType(response.data)) {
    throw new Error(ApiErrors.ValidationError);
  }

  return response.data;
}
