const fastify = require('fastify')({ logger: true });
const sequelize = require('./config/database');
const User = require('./models/User');
const createInitialData = require('./createInitialData');
const PORT = 3000;
fastify.register(require('./routes/router'));

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    console.log(`Server is running on port ${PORT}`);
    await sequelize.authenticate();
    console.log('Connection  successfully.');
    // await sequelize.sync(); 
    await createInitialData();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
