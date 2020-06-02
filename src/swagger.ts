import { authorization, deleteUser, getOneUser, getUsers, postUsers, putUsers, users } from './swagger/users.swagger';
import { accessToken, authenticateUser, postAccessToken, postAuthenticateUser, refreshToken } from './swagger/auth.swagger';

export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Users CRUD API DOCUMENTATION'
  },
  servers: [
    {
      url: '/api'
    }
  ],
  tags: [
    {
      name: 'Users'
    },
    {
      name: 'Authentication'
    }
  ],
  paths: {
    '/users': {
      get: getUsers,
      post: postUsers
    },
    '/users/{id}': {
      put: putUsers,
      delete: deleteUser,
      get: getOneUser
    },

    '/authenticate': {
      post: postAuthenticateUser
    },
    '/token': {
      post: postAccessToken
    }
  },
  definitions: {
    Users: users,
    AuthenticateUser: authenticateUser,
    RefreshToken: refreshToken,
    AccessToken: accessToken
  }
};
