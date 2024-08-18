class Message{
    constructor(sender, receiver, content, timestamp, messageId)
    {
        this.sender = sender;
        this.receiver = receiver;
        this.content = content;
        this.timestamp = timestamp;
        this.messageId = messageId;
    }
}

module.exports = Message;