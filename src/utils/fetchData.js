import Axios from "axios";

export const fetchUserData = async (user) => {
  const userUrl = `https://api.github.com${user}`;

  const {
    data: {
      html_url,
      avatar_url,
      name,
      login,
      created_at,
      followers,
      following,
      public_repos,
    },
  } = await Axios.get(userUrl);

  return {
    html_url,
    avatar_url,
    name,
    login,
    created_at,
    followers,
    following,
    public_repos,
  };
};

export const fetchUserRepo = async (user) => {
  const repoUrl = `https://api.github.com${user}/repos`;

  const { data } = await Axios.get(repoUrl);

  const sorted = data
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    })
    .slice(0, 8);

  return sorted;
};
