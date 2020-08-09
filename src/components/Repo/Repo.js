import React from 'react';

import { FaCodeBranch, FaStar, FaBookmark } from 'react-icons/fa';
import { IconContainer, Card, Description, StyledFaCircle, FileSize, Heading, HeadingLink } from './Repo.style';

export const Repo = (props) => {
  const { html_url, name, description, language, stargazers_count, forks, size } = props;

  return (
    <Card>
      <Heading>
        <FaBookmark />
        <HeadingLink href={html_url} target="_blank">
          {name}
        </HeadingLink>
      </Heading>

      <Description>{!description ? 'No description...' : description}</Description>

      <IconContainer>
        <span>
          <StyledFaCircle langcolor={language} /> {!language ? '---' : language}
        </span>

        <span>
          <FaStar /> {stargazers_count}
        </span>
        <span>
          <FaCodeBranch /> {forks}
        </span>
        <FileSize>{size} KB</FileSize>
      </IconContainer>
    </Card>
  );
};
