import {
  deleteUser,
  getOneUser,
  getUsers,
  postUsers,
  putUsers,
  users,
} from './swagger/users.swagger';

export const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Users CRUD API DOCUMENTATION',
  },
  basePath: '/api',
  tags: [
    {
      name: 'Users',
    },
  ],
  paths: {
    '/users': {
      get: getUsers,
      post: postUsers,
    },
    '/users/{id}': {
      put: putUsers,
      delete: deleteUser,
      get: getOneUser,
    },
  },
  definitions: {
    Users: users,
  },
};
