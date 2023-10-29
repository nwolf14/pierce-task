import { Box, Button, Typography } from '@mui/material';
import { Page } from '../../Page/Page';

interface GlobalErrorProps {
  onTryAgainClick?: () => void;
}

export const GlobalError: React.FC<GlobalErrorProps> = (props) => (
  <Page>
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
  </Page>
);
