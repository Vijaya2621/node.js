const express = require('express');
const router = express();
const userRoutes = require('./user.routes');
const postsRoutes = require('./post.route')
module.exports ={userRoutes, postsRoutes};
