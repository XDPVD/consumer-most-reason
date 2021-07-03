const express = require("express");

const routerMensajes = require("./routes/mensajes");
// Initializations
const app = express();
require("./database");

const kafka = require("kafka-node");

const client = new kafka.KafkaClient({ kafkaHost: "localhost:9092" });

var consumer = new kafka.Consumer(client, [{ topic: "realTest" }]);

var msg;
var msgList = [];

consumer.on("message", function (message) {
  msg = JSON.parse(message.value);
  msgList.push(msg);
  console.log(msgList);
});

// Settings
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3015);

// Middlewares
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(routerMensajes);

app.use(express.static("public"));

const getMsg = () => {
  return msgList;
};

// Global Variables

// Routes

// Static Files

// Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});

exports.getMsg = getMsg;
