import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Button from '../../components/Button/Button';
import { Heading, Link, Container } from './NotFound.style';

const NotFound = () => {
  return (
    <Container>
      <FaGithub color="white" size="8rem" />
      <Heading>User not Found</Heading>
      <Button primary="true" as={Link} to="/">
        Go home
      </Button>
    </Container>
  );
};

export default NotFound;
