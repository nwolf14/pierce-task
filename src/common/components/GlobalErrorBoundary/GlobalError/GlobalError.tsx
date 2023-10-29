import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface GlobalErrorProps {
  onTryAgainClick?: () => void;
}

export const GlobalError: React.FC<GlobalErrorProps> = (props) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}
  >
    {props.onTryAgainClick && (
      <>
        <Typography>Could not load the page, please try again later...</Typography>
        <Button variant="contained" onClick={props.onTryAgainClick}>
          Try again
        </Button>
      </>
    )}
  </Box>
);
