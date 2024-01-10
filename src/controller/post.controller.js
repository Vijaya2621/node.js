 const PostsService = require('../services/index');


 async function createPost(req, res){
  const result = await PostsService.postsService.createPost( req, res);
  return res.send(result);      
}
  //function to get user
async function getAllPosts(req, res) {
  const result = await PostsService.postsService.getAllPosts();
  return res.send(result); 
}
// function to get post by there id
async function getPost(req, res) {
   const userId = req.params.userId; 
  const result = await PostsService.postsService.getPost(userId);
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
    getPost,
    getPostCountByUser
  };
