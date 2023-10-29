import { Container, CssBaseline } from '@mui/material';

export const Page: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">{props.children}</Container>
    </>
  );
};
