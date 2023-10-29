import { Typography } from '@mui/material';
import React from 'react';

type TErrorScreenProps = {
  errorMessage: string;
};

export const ErrorScreen: React.FC<TErrorScreenProps> = (props) => {
  return <Typography>Error occured: {props.errorMessage}</Typography>;
};
