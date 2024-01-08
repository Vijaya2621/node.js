 const PostsService = require('../services/index');

const createPost = async (req, res, next) => {
    try {
      const newPost = await PostsService.postsService.createPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      return {message : "Post not created"}
    }
  };
  //function to get user
async function getAllPosts(req, res) {
  const result = await PostsService.postsService.getAllPosts();
  return res.send(result); 
}
// function to get post by there id
async function getPostById(req, res) {
  const userId = req.params.userId; 
  const result = await PostsService.postsService.getPostById(userId);
  return res.send(result);
}
//function to delete a user
async function deletePost(req, res) {
  const userId = req.params.userId; 
  const result = await PostsService.postsService.deletePost(userId);
  return res.send(result);
}
//function to update a post
async function updatePost(req, res) {
  const userId = req.params.userId;
  const userPost = req.body;  
  const result = await PostsService.postsService.updatePost(userId, userPost); 
  return res.send(result);  
}

async function getPostCountByUser(req, res) {
  const userId = req.params.userId;
  const result = await PostsService.postsService.getPostCountByUser(userId);
  return res.send(result);     
}

  module.exports = {
    createPost,
    getAllPosts,
    deletePost,
    updatePost,
    getPostById,
    getPostCountByUser
  };
