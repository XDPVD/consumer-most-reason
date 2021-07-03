const express = require("express");
const router = express.Router();

const Message = require("../models/Message");

const data = require("../index");

// var testData = [
//   {
//     firstName: "Jhon",
//     lastName: "Salcedo",
//     dni: "70706938",
//     telephone: "924738128",
//     email: "jhon.salcedo@unmsm.edu.pe",
//     reason: "Motivo",
//     comments: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
//   },
//   {
//     firstName: "Jhoan",
//     lastName: "Caramantín",
//     dni: "70706938",
//     telephone: "924738128",
//     email: "jhoan.caramantin@unmsm.edu.pe",
//     reason: "Motivo",
//     comments:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, numquam.",
//   },
// ];

router.get("/mensajes", async (req, res) => {
  const messages = await Message.find();
  res.render("mensajes", {data: messages });
});

router.post("/crearMensaje", async (req, res) => {
  const newMessage = new Message(req.body);
  await newMessage.save();
  res.status(200).send("ok");
});

module.exports = router;

module.exports = router;

