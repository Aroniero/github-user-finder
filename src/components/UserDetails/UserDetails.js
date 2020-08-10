import React from 'react';

import {
  Card,
  CardName,
  CardNumber,
  CardContainer,
  Container,
  JoinDate,
  OuterContainer,
  StyledImage,
  Name,
  Nick,
} from './UserDetails.style';

const UserDetails = ({ user }) => {
  const { htmlUrl, avatarUrl, name, login, createdAt, followers, following, publicRepos } = user;

  return (
    <OuterContainer>
      <Container>
        <a href={htmlUrl} target="_blank" rel="noopener noreferrer">
          <StyledImage src={avatarUrl} alt={`${name} avatar`} />
        </a>
        <Name>{name}</Name>
        <Nick>@{login}</Nick>
        <JoinDate>Joined: {new Date(createdAt).toLocaleDateString()}</JoinDate>
        <CardContainer>
          <Card>
            <CardName>Followers</CardName>
            <CardNumber>{followers}</CardNumber>
          </Card>
          <Card>
            <CardName>Following</CardName>
            <CardNumber>{following}</CardNumber>
          </Card>
          <Card>
            <CardName>Repositories</CardName>
            <CardNumber>{publicRepos}</CardNumber>
          </Card>
        </CardContainer>
      </Container>
    </OuterContainer>
  );
};

export default UserDetails;
