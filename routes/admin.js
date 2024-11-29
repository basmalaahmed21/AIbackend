// routes/admin.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Use the middleware to protect admin routes

router.get('/users', authMiddleware, adminController.listUsers); 
router.get('/users/:id', authMiddleware, adminController.viewUser); 
router.put('/users/:id', authMiddleware, adminController.updateUser); 
router.delete('/users/:id', authMiddleware, adminController.deleteUser);

module.exports = router;