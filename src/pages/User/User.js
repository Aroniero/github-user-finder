import React from 'react';

import { Link, Redirect } from 'react-router-dom';

import UserDetails from '../../components/UserDetails/UserDetails';
import UserRepoList from '../../components/UserRepoList/UserRepoList';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import routes from '../../routes';
import { useFetchUser } from './User.hooks';

const User = ({ match }) => {
  const [data, error, isLoading] = useFetchUser(match.params.user);

  return (
    <>
      {error ? (
        <Redirect to={routes.notFound} />
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <UserDetails user={data.user} />
          <UserRepoList repos={data.repos} />
          <Button as={Link} to="/">
            Go Home
          </Button>
        </>
      )}
    </>
  );
};

export default User;
