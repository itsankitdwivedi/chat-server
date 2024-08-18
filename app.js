const express = require('express');

const userController = require("./controllers/userController");
const messageController = require("./controllers/messageController");
const groupController = require("./controllers/groupController");

const app = express();

app.use(express.json());

// Routes
app.post('/users/register', userController.registerUser);

app.post('/groups/createGroup', groupController.createGroup);

app.post('/groups/addMember', groupController.addMember);

app.post('/messages/sendMessage', messageController.sendMessage);

app.get('/messages/getMessage', messageController.getMessage);

app.get('/messages/getConversation', messageController.getConversation);

const port = 8081;

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
});