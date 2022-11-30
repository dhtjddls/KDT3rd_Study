// sequelize-cli 가 자동으로 생성한 파일
'use strict';

// const fs = require('fs');
// const path = require('path');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
// config의 config.json의 development 정보를 불러온다~
const db = {};

let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Login = require('./Login')(sequelize, Sequelize);
db.Comment = require('./Comment')(sequelize, Sequelize);

module.exports = db;
