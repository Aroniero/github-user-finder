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

const UserDetails = (props) => {
  const { html_url, avatar_url, name, login, created_at, followers, following, public_repos } = props.user;

  return (
    <OuterContainer>
      <Container>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <StyledImage src={avatar_url} alt={`${name} avatar`} />
        </a>
        <Name>{name}</Name>
        <Nick>@{login}</Nick>
        <JoinDate>Joined: {new Date(created_at).toLocaleDateString()}</JoinDate>
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
            <CardNumber>{public_repos}</CardNumber>
          </Card>
        </CardContainer>
      </Container>
    </OuterContainer>
  );
};

export default UserDetails;
