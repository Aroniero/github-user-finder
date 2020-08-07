import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.blue};
`;

const StyledContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
`;

const StyledImage = styled.img`
  width: 100px;
  padding: 5px;
  border-radius: 100px;
  :hover {
    border: 2px solid white;
  }
`;

const StyledName = styled.h1`
  margin: 20px 0;
  font-size: 3rem;
  color: white;
`;
const StyledNick = styled.p`
  color: white;
  margin: 0 0 20px;
`;
const StyledDate = styled.p`
  color: white;
`;

const StyledCardWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 450px;
  justify-content: space-around;
  margin-top: 30px;
`;
const StyledCard = styled.div`
  min-width: 25%;
  background-color: #757575;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  color: white;
  border: 1px solid white;
`;
const StyledCardName = styled.p`
  font-size: 10px;
  margin-bottom: 10px;
`;
const StyledCardNumber = styled.span`
  font-size: 25px;
`;

const UserDetails = (props) => {
  const {
    html_url,
    avatar_url,
    name,
    login,
    created_at,
    followers,
    following,
    public_repos,
  } = props.user;

  return (
    <StyledHeader>
      <StyledContainer>
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          <StyledImage src={avatar_url} alt={`${name} avatar`} />
        </a>
        <StyledName>{name}</StyledName>
        <StyledNick>@{login}</StyledNick>
        <StyledDate>
          Joined: {new Date(created_at).toLocaleDateString()}
        </StyledDate>
        <StyledCardWrapper>
          <StyledCard>
            <StyledCardName>Followers</StyledCardName>
            <StyledCardNumber>{followers}</StyledCardNumber>
          </StyledCard>
          <StyledCard>
            <StyledCardName>Following</StyledCardName>
            <StyledCardNumber>{following}</StyledCardNumber>
          </StyledCard>
          <StyledCard>
            <StyledCardName>Repositories</StyledCardName>
            <StyledCardNumber>{public_repos}</StyledCardNumber>
          </StyledCard>
        </StyledCardWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

export default UserDetails;
