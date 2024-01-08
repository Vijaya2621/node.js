const express = require('express');
const router = express.Router();
const userController = require('../controller/index')

//create user
router.post('/createUser',userController.userController.createUser);

//login user
router.post('/login',userController.userController.loginUser);
//get user
router.get('/getAllUser',userController.userController.getAllUser);

//delete user
router.delete('/deleteUser/:userId',userController.userController.deleteUser);

//update user
router.put('/updateUser/:userId',userController.userController.updateUser);


module.exports = router