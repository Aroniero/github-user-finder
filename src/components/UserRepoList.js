import React from "react";
import styled from "styled-components";

import Repo from "./Repo";

const StyledRepoSection = styled.div`
  max-width: 1700px;
  margin: 20px auto;
  padding: 0 40px;
`;

const StyledRepoListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;
`;

const StyledRepoListHeading = styled.h2`
  margin: 10px 0;
`;

const UserRepoList = ({ repos }) => {
  return (
    <StyledRepoSection>
      <StyledRepoListHeading>Top repos:</StyledRepoListHeading>
      <StyledRepoListWrapper>
        {repos.map((repo) => {
          return <Repo key={repo.name} {...repo} />;
        })}
      </StyledRepoListWrapper>
    </StyledRepoSection>
  );
};

export default UserRepoList;
