const routes = {
  home: `/`,
  user: (user = ':user') => `/user/${user}`,
  notFound: '/notFound',
};

export default routes;
