const express = require('express');
const postsController = require('../controller/index');

const router = express.Router();

router.post('/posts', postsController.postController.createPost);

// //get user
router.get('/getAllPost', postsController.postController.getAllPosts);

// //get user by id
router.get('/getUserById/:userId', postsController.postController.getPostById);

// //delete user
router.delete('/deleteUser/:userId', postsController.postController.deletePost);

// //update user
router.put('/updatePost/:userId', postsController.postController.updatePost);

router.get('/user/:userId', postsController.postController.getPostCountByUser);
module.exports = router;

 