import React, { useState, useEffect } from 'react';

import { fetchUserData, fetchUserRepo } from '../../utils/fetchData';

import { Link, Redirect } from 'react-router-dom';

import UserDetails from '../../components/UserDetails/UserDetails';
import UserRepoList from '../../components/UserRepoList/UserRepoList';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import routes from '../../routes';

const User = ({ match }) => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = async () => {
      try {
        setUser(await fetchUserData(match.url));
        setRepos(await fetchUserRepo(match.url));
      } catch (error) {
        setError(true);
      }
    };
    userData();

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, [match.url]);

  return (
    <>
      {error ? (
        <Redirect to={routes.notFound} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <UserDetails user={user} />
          <UserRepoList repos={repos} />
          <Button as={Link} to="/">
            Go Home
          </Button>
        </>
      )}
    </>
  );
};

export default User;
