const groupService = require("../services/groupService");

const createGroup = (req,res) => { 
    try {
        const {groupName} = req.body;
        console.log(`Group name `, groupName);
        const group = groupService.createGroup(groupName);
        return res.status(201).send(`Group ${groupName} created successfully!`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const addMember = (req, res) =>{
    try {
        const {groupName, username} = req.body;
        // validate group existance
        groupService.addMember(groupName, username);
        return res.status(200).send("Added member");
    } catch (error) {
        return res.status(500).send(error.message);
    }

}   

module.exports = {createGroup, addMember};