import React from 'react';
import { Bouncing, BouncingLoader, Container } from './Loading.style';

const Loading = () => {
  return (
    <Container>
      <BouncingLoader>
        <Bouncing />
      </BouncingLoader>
    </Container>
  );
};

export default Loading;
