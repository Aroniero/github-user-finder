import githubApi from '../api';
import githubRoutes from '../routes';

export const fetchUserData = async (user) => {
  const url = githubRoutes.user(user);

  const {
    data: { html_url, avatar_url, name, login, created_at, followers, following, public_repos },
  } = await githubApi.get(url);

  return {
    htmlUrl: html_url,
    avatarUrl: avatar_url,
    name,
    login,
    createdAt: created_at,
    followers,
    following,
    publicRepos: public_repos,
  };
};
