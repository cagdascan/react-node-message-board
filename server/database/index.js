const uuid = require("uuid/v4");

const db = { channels: [], messages: [] };

const NUM_OF_CHANNELS = 10;

exports.initializeDB = function() {
  for (let i = 0; i < NUM_OF_CHANNELS; i++) {
    db.channels.push({ id: i + 1 });
  }
};

exports.getChannels = function() {
  return db.channels;
};

exports.getMessagesByChannelId = function(id) {
  return db.messages.filter(i => i.channelId === Number(id));
};

exports.insertMessage = function(channelId, messageStr) {
  const message = {
    id: uuid(),
    channelId: Number(channelId),
    createdAt: new Date(),
    message: messageStr
  };
  db.messages.push(message);
  return db.messages.filter(i => i.channelId === Number(channelId));
};
