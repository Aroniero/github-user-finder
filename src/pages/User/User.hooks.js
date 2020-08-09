import { useEffect, useState } from 'react';
import { fetchUserData } from '../../api/github/user/fetchUserData';
import { fetchUserRepo } from '../../api/github/user/fetchUserRepos';

export const useFetchUser = (user) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = async () => {
      setIsLoading(true);
      try {
        setData({
          user: await fetchUserData(user),
          repos: await fetchUserRepo(user),
        });
      } catch (error) {
        // todo: Handle other errors than 404
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    userData();
  }, [user]);

  return [data, error, isLoading];
};
