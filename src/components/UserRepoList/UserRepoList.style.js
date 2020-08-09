import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1700px;
  margin: 20px auto;
  padding: 0 40px;
`;

export const ListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;
`;

export const Heading = styled.h2`
  margin: 10px 0;
`;
