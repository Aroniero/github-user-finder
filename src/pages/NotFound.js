import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import Button from "../components/Button";

const StyledNotFoundWrapper = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;

const NotFound = () => {
  return (
    <StyledNotFoundWrapper>
      <FaGithub color="white" size="8rem" />
      <StyledHeading>User not Found</StyledHeading>
      <Button primary="true" as={StyledLink} to="/">
        Go home
      </Button>
    </StyledNotFoundWrapper>
  );
};

export default NotFound;
