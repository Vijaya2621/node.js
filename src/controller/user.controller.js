const { userServices } = require('../services/index');

//function to create a user
async function createUser(req, res){
    const result = await userServices.createUser( req, res);
    return res.send(result);
}

//function to login a user
async function loginUser(req, res){
    const result = await userServices. loginUser(req, res);
    return res.send(result);
}
//function to read details of user
async function getAllUser(req, res) {
    const result = await userServices.getAllUser();
    return res.send(result); 
}
         
//function to delete a user
async function deleteUser(req, res) {
    const userId = req.params.userId; 
    const result = await userServices.deleteUser(userId);
    return res.send(result);
}

//function to update a user
async function updateUser(req, res) {
    const userId = req.params.userId;
    const userData = req.body;  
    const result = await userServices.updateUser(userId, userData); 
    return res.send(result);  
}

//exporting the files
module.exports ={
    createUser,
    getAllUser,
    deleteUser,
    updateUser,
    loginUser
}