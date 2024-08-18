const messageService = require("../services/messageService");

const sendMessage = (req,res) => {
    const {sender, receiver, content} = req.body;
    try {
        const message = messageService.sendMessage(sender, receiver, content);
        return res.status(200).send(`Message sent by ${sender} to ${receiver} at time ${message.timestamp}`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getMessage = (req,res) => { // /messages/getMessage?username=xyz
    const username = req.query.username;
    try {
        const messages = messageService.getMessage(username);
        return res.status(200).send(messages);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getConversation = (req,res) => {
    const { user1, user2 } = req.query;
    try {
        const messages = messageService.getConversation(user1, user2);
        return res.status(200).send(messages);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {sendMessage , getMessage, getConversation};