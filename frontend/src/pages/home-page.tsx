import { Typography, Container } from '@material-ui/core';

const HomePageComp = () => {

  return (
    <Container maxWidth="sm" style={{ marginTop: 16, marginBottom: 16, padding: 16 }}>
      <Typography variant="h6">Welcome to home!</Typography>
    </Container>
  );
};

export default HomePageComp;
