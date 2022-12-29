// SQL ORM 모듈
const { Sequelize, DataTypes, Op } = require("sequelize");

// DB 생성
const sequelize = new Sequelize({
  dialect: "sqlite", // db 종류
  storage: "database.sqlite", // 파일명
});

// Model(테이블) 생성
const Userinfo = sequelize.define("Userinfo", {
  // create(속성 정의)
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING, // 문자형
    allowNull: false, // NOT NULL(필수값)
  },
  age: {
    type: DataTypes.INTEGER, // 정수
    allowNull: false, // NOT NULL(필수값)
  },
  sex: {
    type: DataTypes.STRING, // 문자
    allowNull: false, // NOT NULL(필수값)
  },
  contact: {
    type: DataTypes.STRING, // 문자
  },
});

module.exports = { sequelize, Userinfo, Op };
