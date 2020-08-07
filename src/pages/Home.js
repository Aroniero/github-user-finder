import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import { FaGithub } from "react-icons/fa";

import Button from "../components/Button";

const StyledHomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const StyledHeading = styled.h1`
  margin: 20px;
  color: white;
  font-family: "Montserrat", sans-serif;
`;
const StyledInput = styled.input`
  min-width: 300px;
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
  border: 2px solid white;
  background-color: white;
`;

const Home = () => {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    setSubmitted(true);
  };

  return (
    <>
      {submitted && <Redirect from="/" to={`/users/${input}`} />}
      <StyledHomeWrapper>
        <FaGithub color="white" size="8rem" />
        <StyledHeading>Enter user name:</StyledHeading>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <StyledInput
            placeholder="e.g. stolinski"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button primary>Submit</Button>
        </form>
      </StyledHomeWrapper>
    </>
  );
};

export default Home;
