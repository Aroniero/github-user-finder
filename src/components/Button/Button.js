import styled from 'styled-components';

const Button = styled.button`
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  display: block;
  width: 40%;
  max-width: 150px;
  margin: 20px auto 20px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid ${({ primary }) => (primary ? 'white' : 'black')};
  background-color: transparent;
  text-transform: uppercase;
  :hover {
    background-color: ${({ primary }) => (primary ? 'white' : 'black')};
    color: ${({ primary }) => (primary ? 'black' : 'white')};
    font-weight: bold;
  }
  :focus {
    outline: 0;
  }
`;

export default Button;
