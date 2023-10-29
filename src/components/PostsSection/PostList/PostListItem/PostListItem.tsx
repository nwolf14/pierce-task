import React, { memo } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { TPost } from '../../../../common/apis/types/getPosts.types';
import { PostComment } from './PostComment/PostComment';

type TPostListItemProps = TPost;

export const PostListItem: React.FC<TPostListItemProps> = memo((props) => {
    return (
        <Box paddingBottom={6} component='article'>
            <Card>
                <CardContent
                    sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column"
                    }}
                >
                    <Typography variant="h4">Title: {props.title}</Typography>
                    <Box dangerouslySetInnerHTML={{ __html: props.content }} />
                    <PostComment postId={props.ID}/>
                </CardContent>
            </Card>
        </Box>
    );
});
