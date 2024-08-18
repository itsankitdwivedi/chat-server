const userService = require("../services/userService");

const registerUser = (req,res) =>{
    const {username} = req.body;
    try {
        if(userService.findUser(username))
            return res.status(409).send(`User ${username} already exists!.`)
        const user = userService.registerUser(username);
        return res.status(201).send(`User ${username} registered successfully!`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {registerUser};
