const express = require('express');
const postsController = require('../controller/index');

const router = express.Router();

router.post('/posts', postsController.postController.createPost);

// //get user
router.get('/getAllPost', postsController.postController.getAllPosts);

// //get user by id     
router.get('/getPost/:userId', postsController.postController.getPost);      

// //delete user
router.delete('/deletePost/:userId', postsController.postController.deletePost);

// //update user
router.put('/updatePost/:userId', postsController.postController.updatePost);

//
router.all('*', (req, res)=>{
    res.status(404).json({
       status :"fail",
       mesasge : `cannot find ${req.originalUrl} on the server!`  
    })
    })

module.exports = router;

     