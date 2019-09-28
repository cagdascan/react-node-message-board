const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  initializeDB,
  getChannels,
  getMessagesByChannelId,
  insertMessage
} = require("./database/index.js");

const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.json());

app.get("/channels", function(req, res) {
  res.json(getChannels());
});

app.get("/messages/:channelId", function(req, res) {
  res.json(getMessagesByChannelId(req.params["channelId"]));
});

app.post("/channels/:channelId", function(req, res) {
  const result = insertMessage(req.params["channelId"], req.body.message);
  res.json(result);
});

app.listen(PORT, () => {
  initializeDB();
});
