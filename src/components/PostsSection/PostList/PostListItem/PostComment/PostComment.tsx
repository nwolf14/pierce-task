import React, { memo } from 'react';
import { Box, Typography } from '@mui/material';
import { useSingleCommentData } from '../../../../../common/components/CommentsDataProvider/CommentsDataProvider';
import { Loader } from '../../../../../common/components/Loader/Loader';
import { ErrorScreen } from '../../../../../common/components/ErrorScreen/ErrorScreen';

type TPostCommentProps = {
    postId: number;
}

export const PostComment: React.FC<TPostCommentProps> = memo((props) => {
    const { comment, isLoading, isError } = useSingleCommentData(props.postId);

    if (isLoading) {
        return <Loader size={40}/>;
    }

    if (isError) {
        return <ErrorScreen errorMessage='server could not load latest post comment, try again later...' />;
    }

    if (!comment) {
        return null;
    }

    return (
        <Box>
            <Typography variant='h5'>Post latest comment:</Typography>
            <Typography>Author name: {comment.author.name}</Typography>
            <div dangerouslySetInnerHTML={{ __html: comment.content }} />
        </Box>
    );
});
