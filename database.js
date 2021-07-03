const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://admin:123@test-cluster.67lkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  )
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
