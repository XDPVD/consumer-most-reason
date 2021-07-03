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

router.get("/mensajesTest", (req, res) => {
  console.log(data.getMsg());
  res.render("mensajesTest", { data: data.getMsg() });
});

router.get("/mensajes", async (req, res) => {
  const messages = await Message.find();
  console.log(messages);
  res.render("mensajes");
});

router.post("/crearMensaje", async (req, res) => {
  const newMessage = new Message(req.body);
  await newMessage.save();
  res.status(200).send("ok");
});
let obj = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dni: { type: Number },
  telephone: { type: Number },
  email: { type: String },
  content: { type: String },
  date: { type: Date, default: Date.now },
};
module.exports = router;
