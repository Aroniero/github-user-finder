import React from 'react';
import { Heading, ListContainer, Container } from './UserRepoList.style';
import { Repo } from '../Repo/Repo';

const UserRepoList = ({ repos }) => {
  return (
    <Container>
      <Heading>Top repos:</Heading>
      <ListContainer>
        {repos.map((repo) => {
          return <Repo key={repo.name} {...repo} />;
        })}
      </ListContainer>
    </Container>
  );
};

export default UserRepoList;
