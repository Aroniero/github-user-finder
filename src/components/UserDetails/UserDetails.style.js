import styled from 'styled-components';

export const OuterContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
`;

export const StyledImage = styled.img`
  width: 100px;
  padding: 5px;
  border-radius: 100px;
  :hover {
    border: 2px solid white;
  }
`;

export const Name = styled.h1`
  margin: 20px 0;
  font-size: 3rem;
  color: white;
`;

export const Nick = styled.p`
  color: white;
  margin: 0 0 20px;
`;

export const JoinDate = styled.p`
  color: white;
`;

export const CardContainer = styled.section`
  display: flex;
  width: 100%;
  max-width: 450px;
  justify-content: space-around;
  margin-top: 30px;
`;

export const Card = styled.div`
  min-width: 25%;
  background-color: #757575;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  color: white;
  border: 1px solid white;
`;

export const CardName = styled.p`
  font-size: 10px;
  margin-bottom: 10px;
`;

export const CardNumber = styled.span`
  font-size: 25px;
`;
