const Group = require("../models/Group");

const groups = [];

const createGroup = (groupName) =>{
    const group = new Group(groupName);
    groups.push(group);
    return group;
}

const addMember = (group, user) =>{
    group.members.push(user);
}


module.exports = {createGroup, addMember};