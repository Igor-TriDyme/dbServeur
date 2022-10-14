const dbConfig = require('../config/dbConfig');
const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.localUrl = dbConfig.localUrl;
db.cloudUrl = dbConfig.cloudUrl;
db.FRONTEND_SERVER_PATH= dbConfig.FRONTEND_SERVER_PATH;

module.exports = db; 
 