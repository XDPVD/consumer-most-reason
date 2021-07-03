const express = require("express");

const routerMensajes = require("./routes/mensajes");
// Initializations
const app = express();
require('dotenv').config();
require("./database");
require("./kafka");

// Settings
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3015);

// Middlewares
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(routerMensajes);

app.use(express.static("public"));



// Global Variables

// Routes

// Static Files

// Server is listening
app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});

