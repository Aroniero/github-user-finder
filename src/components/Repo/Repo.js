import React from 'react';

import { FaCodeBranch, FaStar, FaBookmark } from 'react-icons/fa';
import { IconContainer, Card, Description, StyledFaCircle, FileSize, Heading, HeadingLink } from './Repo.style';

export const Repo = ({ htmlUrl, name, description, language, stargazersCount, forks, size }) => {
  return (
    <Card>
      <Heading>
        <FaBookmark />
        <HeadingLink href={htmlUrl} target="_blank">
          {name}
        </HeadingLink>
      </Heading>

      <Description>{description ?? 'No description...'}</Description>

      <IconContainer>
        <span>
          <StyledFaCircle langcolor={language} /> {language ?? '---'}
        </span>

        <span>
          <FaStar /> {stargazersCount}
        </span>
        <span>
          <FaCodeBranch /> {forks}
        </span>
        <FileSize>{size} KB</FileSize>
      </IconContainer>
    </Card>
  );
};
