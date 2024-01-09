const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// const userSchema = require('./src/model/index')
const app = express();
const routes = require('./src/routes/index')
const slugify = require('slugify');

app.use(express.json());
app.use(routes.userRoutes);
app.use(routes.postsRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening to the port: ${port}`);
});
  
console.log("Database URI:", process.env.DATABASE_URI);

mongoose.connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });
   

      