const dotenv = require('dotenv');
const path = require('path');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'
const ENV = dotenv.config({
  path: `./${envFile}`
});

const ENV_VAR = {
    localUrl  :  "mongodb://localhost:27017/admin",
    cloudUrl : "",
    FRONTEND_SERVER_PATH: ENV.parsed.FRONTEND_SERVER_PATH,
    

}

module.exports = ENV_VAR;