const swaggerJSDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Photo Caption Contest API', // Title of the API
    version: '1.0.0', // Version of the API
    description: 'API documentation for the Photo Caption Contest project', // Short description of the API
    contact: {
      name: 'Tanish Sancheti', // Your name
    },
  },
  servers: [
    {
      url: 'http://localhost:3000', // The base URL for your API
      description: 'Development server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API docs (route files)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
