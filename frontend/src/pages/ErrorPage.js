import { useRouteError } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        height={400}
        width={500}
        mb={10}
        mt={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection={'column'}
        p={5}
        sx={{
          backgroundColor: 'white',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Box>
    </Container>
  );
}
