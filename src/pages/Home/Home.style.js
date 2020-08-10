import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Heading = styled.h1`
  margin: 20px;
  color: white;
  font-family: 'Montserrat', sans-serif;
`;

export const Input = styled.input`
  min-width: 300px;
  padding: 10px 20px;
  border-radius: 20px;
  outline: none;
  border: 2px solid white;
  background-color: white;
`;
