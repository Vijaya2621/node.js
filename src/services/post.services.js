 const Post = require('../model/index');
const mongoose = require('mongoose');
async function  createPost(req, res) {
  try {
    const newPost = await Post.postsSchema.create(req.body);
    res.status(201).json(newPost);
  } 
  catch (error) {
    return {message : "Post not created"}
};
}
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
async function getPost(postData) {
  try {                                               
    const criteria = {};  
    criteria.$or = [];

    if(mongoose.Types.ObjectId.isValid(postData)) {
      criteria.$or.push({ _id: postData })
    }

    criteria.$or.push({ slug: postData })
    const post = await Post.postsSchema.findOne(criteria);
    console.log(post)
    if(post){
      const slug =post.slug; 
      const convertSlug = slug.replace(/ /g,"-");     
      console.log(convertSlug);
      post.slug = convertSlug;
      await post.save();
      
      console.log('Updated Slug:', post.slug);
      console.log('Post:', post);
      return {
        status : true,
        message : 'success',
        payload : post,
      };
    }
    return {
      status : false,
      message : 'Not find any post',
      payload : post,
    };

   
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
          await Post.postsSchema.deleteOne({ _id: user._id });
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
module.exports = {
  createPost,
  getAllPosts,
  deletePost,
  updatePost,
  getPost,   
  getPostCountByUser
};
