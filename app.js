const express = require('express');
const mongoose = require('mongoose');
// const userSchema = require('./src/model/index')
const app = express();
const routes = require('./src/routes/index')
const slugify = require('slugify');

app.use(express.json());
app.use(routes.userRoutes);
app.use(routes.postsRoutes);

app.listen(8080, () => {
    console.log(`listening to the port:8080`)
})

//database connection
// mongoose.connect('mongodb://localhost:27017/user_crud_operation')
// .then(() => {
//     console.log("connected to user database ");
// })
mongoose.connect('mongodb://localhost:27017/posts_crud_operation')
.then(() => {
    console.log("connected to posts database ");
})
.catch((e) => {
console.log("not connected");
console.log(e);
})



const title = "Hello World! How to Build a Website";
const slug = slugify(title, { lower: true });
console.log(slug);