import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';

import Button from '../../components/Button/Button';
import { Heading, Container, Input } from './Home.style';

const Home = () => {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setSubmitted(true);
  };

  return (
    <>
      {submitted && <Redirect from="/" to={`/users/${input}`} />}
      <Container>
        <FaGithub color="white" size="8rem" />
        <Heading>Enter user name:</Heading>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Input
            placeholder="e.g. stolinski"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button primary>Submit</Button>
        </form>
      </Container>
    </>
  );
};

export default Home;
