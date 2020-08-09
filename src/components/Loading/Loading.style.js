import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    to {
        opacity: 0.1;
        transform: translate3d(0, -16px, 0);
    }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Bouncing = styled.div`
  width: 23px;
  height: 23px;
  background: white;
  margin: 0 5px -5px;
  border-radius: 50%;
  animation: ${bounce} 0.6s ${({ delay }) => delay}s infinite alternate;
`;
