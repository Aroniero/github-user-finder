import React from 'react';
import { Bouncing, InnerContainer, Container } from './Loading.style';

const Loading = () => {
  return (
    <Container>
      <InnerContainer>
        <Bouncing delay={0} />
        <Bouncing delay={0.2} />
        <Bouncing delay={0.4} />
      </InnerContainer>
    </Container>
  );
};

export default Loading;
