import React from 'react';
import { Redirect } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';

import Button from '../../components/Button/Button';
import { Heading, Container, Input } from './Home.style';
import routes from '../../routes';
import { useHomeForm } from './Home.hooks';

const Home = () => {
  const [submitted, handleSubmit] = useHomeForm();

  if (submitted) {
    return <Redirect to={routes.user(submitted)} />;
  }

  return (
    <>
      <Container>
        <FaGithub color="white" size="8rem" />
        <Heading>Enter user name:</Heading>
        <form onSubmit={handleSubmit}>
          <Input placeholder="e.g. stolinski" name="name" />
          <Button primary>Submit</Button>
        </form>
      </Container>
    </>
  );
};

export default Home;
