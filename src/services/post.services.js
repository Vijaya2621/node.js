 const Post = require('../model/index');

const createPost = async (postData) => {
  try {
    const newPost = new Post(postData);
    return await newPost.Post.save();
  } catch (error) {
    throw error;
  }
};
// get all posts
async function getAllPosts() {
  try {
      let allPost = await Post.postsSchema.find();
      return allPost;
  } catch (error) {
      return "Something went wrong";
  }
}
//get post by id
async function getPostById(post) {
  try {
      let userPost = await Post.postsSchema.find( { $or: [ { '_id': post}, { 'slug': post } ] } );
      return userPost;
  } catch (error) {
    console.log(error)
      return "Something went wrong";
  }
}
//delete post 
async function deletePost(userId) {
  try {
      let user = await Post.postsSchema.findById(userId);
      if (!user) {
          return "Post not found or something went wrong";
      } else {
          await Post.deleteOne({ _id: user._id });
          return "Post deleted";
      }
  } catch (error) {
      return "Something went wrong";
  }
}
// function to update a post
async function updatePost(userId, userPost) {
  try {
      let updatedPost = await Post.postsSchema.findByIdAndUpdate(userId, userPost);
      if (!updatedPost) {
          return "User not found or something went wrong";
      } else {
          return "User updated";
      }
  } catch (error) {
      return "Something went wrong";
  }
}

async function getPostCountByUser(userId) {
  try {
      const postCount = await Post.postsSchema.findById(userId);
      
      return postCount;
  } catch (error) {
      return {message: "Internal Server Error" };
  }
  
}
// function to get post using slugs
async function getPostBySlug() {
  try {
      let userPost = await Post.postsSchema.findById();
      return userPost;
  } catch (error) {
      return "Something went wrong";
  }
}
module.exports = {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
  getPostById,   
  getPostCountByUser
};
