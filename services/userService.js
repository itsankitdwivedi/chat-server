const User = require("../models/User");

const users = [];

const registerUser = (username) =>{
    const user = new User(username);
    users.push(user);
    return user;
}

// findUser
const findUser = (username) =>{
    return users.find(user => user.username === username);
} 

module.exports = {registerUser, findUser};