const express = require('express');
const authController = require('../controllers/authController.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/logout', authController.logoutUser);
router.get('/current-user', authMiddleware.protect, authController.getCurrentUser);

module.exports = router;
