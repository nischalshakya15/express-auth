export const postAuthenticateUser = {
  tags: ['Authentication'],
  summary: 'Authenticate user',
  consumes: ['application/json'],
  produces: ['application/json'],
  parameters: [
    {
      in: 'body',
      name: 'body',
      description: 'Specify username and password',
      required: true,
      schema: {
        $ref: '#definitions/AuthenticateUser'
      }
    }
  ],
  responses: {
    200: {
      description: 'OK',
      schema: {
        $ref: '#definitions/AuthenticatedResponse'
      }
    }
  }
};

export const postAccessToken = {
  tags: ['Authentication'],
  summary: 'Generate access token',
  produces: ['application/json'],
  parameters: [
    {
      in: 'body',
      name: 'body',
      description: 'Specify refresh token',
      required: true,
      schema: {
        $ref: '#definitions/RefreshToken'
      }
    }
  ],
  responses: {
    201: {
      description: 'Created',
      schema: {
        $ref: '#definitions/AccessToken'
      }
    }
  }
};

export const authenticateUser = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      format: 'string'
    },
    password: {
      type: 'string',
      format: 'string'
    }
  }
};

export const refreshToken = {
  type: 'object',
  properties: {
    refreshToken: {
      type: 'string',
      format: 'string'
    }
  }
};

export const accessToken = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string',
      format: 'string'
    }
  }
};

export const authenticatedResponse = {
  type: 'object',
  properties: {
    ...refreshToken.properties,
    ...accessToken.properties
  }
};
