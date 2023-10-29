import React from 'react';
import { TPost } from '../../../common/apis/types/getPosts.types';
import { Box, Typography } from '@mui/material';
import { PostListItem } from './PostListItem/PostListItem';

type TPostListProps = {
    posts: TPost[];
}

export const PostList: React.FC<TPostListProps> = (props) => {
    return (
        <Box >
            <Typography marginBottom={1} variant="h3">
                Post list:
            </Typography>

            {props.posts?.map((post) => (
                <PostListItem
                    {...post}
                    key={post.ID}
                />
            ))}
        </Box>
    );
};
