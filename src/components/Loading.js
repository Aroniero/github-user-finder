import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
   to {
        opacity: 0.1;
        transform: translate3d(0, -16px, 0);
      }
`;

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue};
`;

const StyledBouncingLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);

  ::before,
  ::after {
    display: inline-block;
    width: 23px;
    height: 23px;
    background: white;
    border-radius: 50%;
    margin-bottom: -5px;

    animation: 0.6s ${bounce} infinite alternate;
    content: "";
  }

  ::after {
    animation-delay: 0.4s;
  }
`;

const StyledBouncingDiv = styled.div`
  display: inline-block;
  width: 23px;
  height: 23px;
  background: white;
  margin: 0 5px -5px;
  border-radius: 50%;

  content: "";
  animation: ${bounce} 0.6s infinite alternate;
  animation-delay: 0.2s;
`;

const Loading = () => {
  return (
    <StyledContainer>
      <StyledBouncingLoader>
        <StyledBouncingDiv />
      </StyledBouncingLoader>
    </StyledContainer>
  );
};

export default Loading;