import React from "react";

import { FaCodeBranch, FaStar, FaCircle, FaBookmark } from "react-icons/fa";
import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0px 0px 17px -10px rgba(0, 0, 0, 0.75);
  background-color: transparent;
  padding: 25px 20px;
  border-radius: 10px;
`;

const StyledHeading = styled.h2`
  margin-bottom: 5px;
  font-size: 20px;
`;

const StyledHeadingLink = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 5px;
`;
const StyledDescription = styled.p`
  margin: 10px 0 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledFaCircle = styled(FaCircle)`
  color: ${({ theme, langcolor }) => theme.colors[langcolor]};
`;

const StyledFileSize = styled.span`
  margin-left: 50px;
`;

const Repo = (props) => {
  const {
    html_url,
    name,
    description,
    language,
    stargazers_count,
    forks,
    size,
  } = props;

  return (
    <StyledCard>
      <StyledHeading>
        <FaBookmark />
        <StyledHeadingLink href={html_url} target="_blank">
          {name}
        </StyledHeadingLink>
      </StyledHeading>

      <StyledDescription>
        {!description ? "No description..." : description}
      </StyledDescription>

      <IconWrapper>
        <span>
          <StyledFaCircle langcolor={language} /> {!language ? "---" : language}
        </span>

        <span>
          <FaStar /> {stargazers_count}
        </span>
        <span>
          <FaCodeBranch /> {forks}
        </span>
        <StyledFileSize>{size} KB</StyledFileSize>
      </IconWrapper>
    </StyledCard>
  );
};

export default Repo;
