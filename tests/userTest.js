const mockingoose = require('mockingoose');// יבוא של הספרייה mockingoose
const usersModel = require('../models/users');

const {
  getAllUsers,
  getById,
  putUser,
  postUser,
  deleteUser
} = require('../services/user.services');
