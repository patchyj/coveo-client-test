require('dotenv').config({ path: `${__dirname}/.env` });

export default {
  PORT: process.env.REACT_APP_PORT
};
