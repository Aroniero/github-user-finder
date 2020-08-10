import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

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

export const Link = styled(LinkRouter)`
  text-decoration: none;
  text-align: center;
`;
