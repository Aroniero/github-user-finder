import githubRoutes from '../routes';
import githubApi from '../api';

export const fetchUserRepo = async (user) => {
  const url = githubRoutes.userRepos(user);

  const { data } = await githubApi.get(url);

  const sorted = data
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 8)
    .map((item) => ({ ...item, htmlUrl: item.html_url, stargazersCount: item.stargazers_count }));

  return sorted;
};
