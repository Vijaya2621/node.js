const express = require('express');
const router = express.Router();
const userController = require('../controller/index')
const {verifyAccessToken} = require('../middleware/middleware')
//create user
router.post('/createUser',userController.userController.createUser);

//login user
router.post('/login',userController.userController.loginUser);
//get user
router.get('/getAllUser',verifyAccessToken, userController.userController.getAllUser);

//delete user
router.delete('/deleteUser/:userId',verifyAccessToken, userController.userController.deleteUser);

//update user
router.put('/updateUser/:userId', verifyAccessToken, userController.userController.updateUser);

router.all('*', (req, res)=>{
res.status(404).json({
   status :"fail",
   mesasge : `cannot find ${req.originalUrl} on the server!`  
})
})

module.exports = router       