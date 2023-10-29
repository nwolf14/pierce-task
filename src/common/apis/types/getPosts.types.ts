export type TPost = {
  ID: number;
  title: string;
  content: string;
};

export type TGetPostsResponseData = {
  posts: TPost[];
};
