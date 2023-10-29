import { Box, CircularProgress } from '@mui/material';
import React from 'react';

type TLoaderProps = {
  size: number;
};

export const Loader: React.FC<TLoaderProps> = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={props.size} />
    </Box>
  );
};
