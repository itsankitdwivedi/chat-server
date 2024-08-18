const Message = require("../models/Message");
const { randomUUID } = require('crypto');

const messageMap = new Map(); //{receiver,Message[]}
const messageList = [];

const sendMessage = (sender, receiver, content) =>{
    const message = new Message(sender, receiver, content, new Date(), randomUUID());
    if(!messageMap.has(receiver))
        messageMap.set(receiver, []);

    messageMap.get(receiver).push(message);
    messageList.push(message);
    return message;
}

const getMessage = (username) =>{
    return messageMap.get(username) || [] ;
}

const getConversation = (user1, user2) =>{
    return messageList.filter(message => (message.sender === user1 || message.receiver == user1) && message.sender === user2 || message.receiver === user2);
}

module.exports = {sendMessage, getMessage, getConversation};