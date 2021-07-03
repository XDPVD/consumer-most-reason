const kafka = require("kafka-node");

const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_HOST });
const Message = require("./models/Message");


var consumer = new kafka.Consumer(client, [
  { topic: "CVALLEJO", offset: 0, partition: 1 },
]);

consumer.on("message", function (message) {

    let obj = JSON.parse(message.value);

    obj.dni = Number(obj.dni)

    obj.telephone = Number(obj.telephone)

    const newMessage = new Message(obj);
    newMessage.save().then((res)=>console.log(res));
});