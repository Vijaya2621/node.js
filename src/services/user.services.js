const {userSchema}  = require('../model/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const validation = require('../validations/index')
require('dotenv').config()
//create a user
async function createUser( req, res) {
    const { error } = validation.createUserSchema.validate(req.body);
    console.log(req.body)
    if (error) {
        return res.status(400).json({ error: error.details.map((err) => err.message) });
    }
    console.log(req.body)
    const {role} = req.body;
    console.log(role) 
        try {  
        let isUserAlreadyExist = await userSchema.findOne({ email: req.body.email});
  if (isUserAlreadyExist){
       return res.status(500).send({ message: "already exist" });
   } 
      // Hash the password before creating the user
      const hashedPassword = await bcrypt.hash(req.body.password, 15);
      req.body.password = hashedPassword;

      let newUser = await userSchema.create(req.body);

      if (!newUser) {
        return { message: "cannot save user" };
     } 
     return{ message :"registration successful"}
    }
     catch (error) {
        return { message:  "something went wrong" };
     }
   }

//function to login a user 
async function loginUser(req, res){
    try{
        const {email, password} = req.body;
        const user = await userSchema.findOne({email});
        const comparepassword = await bcrypt.compare(password, user.password);
        const myToken = process.env.tokenKey;
        if(user && comparepassword){
            const token = jwt.sign({userId:user._id, email: user.email, userName:user.userName}, myToken, 
            { expiresIn: '1h' });
        return {message :"login successfull", token};
        }
        else{
            return res.status(401).json({ message: 'login failed' });
        }
    }
    catch(error){
        return{message: "something went wrong"}  
    }
} 
// function to read details of all users
async function getAllUser() {
    try {
        let allUser = await userSchema.find();
        return allUser;
    } catch (error) {
        return "Something went wrong";
    }
}

// function to delete a user
async function deleteUser(userId) {
    try {
        let user = await userSchema.findById(userId);
        if (!user) {
            return "User not found or something went wrong";
        } else {
            await userSchema.deleteOne({ _id: user._id });
            return "User deleted";
        }
    } catch (error) {
        return "Something went wrong";
    }
}

// function to update a user
async function updateUser(userId, userData) {
    try {
        let updatedUser = await userSchema.findByIdAndUpdate(userId, userData);
        if (!updatedUser) {
            return "User not found or something went wrong";
        } else {
            return "User updated";
        }
    } catch (error) {
        return "Something went wrong";
    }
}

module.exports ={
    createUser,
    getAllUser,
    deleteUser,
    updateUser,
    loginUser
 }