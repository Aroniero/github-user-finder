import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';

import Button from '../../components/Button/Button';
import { Heading, Container, Input, ErrorMsg, UserForm } from './Home.style';
import { useHomeForm } from './Home.hooks';

import routes from '../../routes';

const Home = () => {
  const [submitted, handleSubmit, inputError] = useHomeForm();

  if (submitted) {
    return <Redirect to={routes.user(submitted)} />;
  }

  return (
    <>
      <Container>
        <FaGithub color="white" size="8rem" />
        <Heading>Enter user name:</Heading>
        <UserForm onSubmit={handleSubmit}>
          <Input placeholder="e.g. stolinski" name="name" />
          <Button primary>Submit</Button>
          {inputError && <ErrorMsg>Input is empty. Try again</ErrorMsg>}
        </UserForm>
      </Container>
    </>
  );
};

export default Home;
