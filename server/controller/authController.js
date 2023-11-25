const User = require('../models/User.js');
const ErrorResponse = require('../utils/ُErrorResponse.js');
const asyncHandler = require('./../middleware/asyncHandler.js');
const sendTokenResponse = require('../utils/sendTokenResponse.js');

const controller = {
    registerUser: asyncHandler(async (req, res) => {
      const { name, email, password, role } = req.body;
  
      const user = await User.create({
        name,
        email,
        password,
        role
      });
  
      sendTokenResponse(user, 200, res);
    }),
  
    loginUser: asyncHandler(async (req, res, next) => {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return next(new ErrorResponse('Please provide an email and password', 400));
      }
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return next(new ErrorResponse('Invalid credentials', 401));
      }
  
      const isMatch = await user.matchPassword(password);
  
      if (!isMatch) {
        return next(new ErrorResponse('Invalid credentials', 401));
      }
  
      sendTokenResponse(user, 200, res);
    }),
  
    logoutUser: asyncHandler(async (req, res, next) => {
      res.cookie('token', null, {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
      });
  
      res.status(200).json({
        success: true,
        data: {}
      });
    }),
  
    getCurrentUser: asyncHandler(async (req, res, next) => {
      const user = await User.findById(req.user.id);
  
      res.status(200).json({
        success: true,
        data: user
      });
    })
  };
  
  module.exports = controller;
  