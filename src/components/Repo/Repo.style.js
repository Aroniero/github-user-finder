import { FaCircle } from 'react-icons/fa';
import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0px 0px 17px -10px rgba(0, 0, 0, 0.75);
  background-color: transparent;
  padding: 25px 20px;
  border-radius: 10px;
`;

export const Heading = styled.h2`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const HeadingLink = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 5px;
`;
export const Description = styled.p`
  margin: 10px 0 15px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFaCircle = styled(FaCircle)`
  color: ${({ theme, langcolor }) => theme.colors[langcolor]};
`;

export const FileSize = styled.span`
  margin-left: 50px;
`;
