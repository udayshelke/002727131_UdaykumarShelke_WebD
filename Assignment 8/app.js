const express = require("express");
const app = express();

const mongoose = require("mongoose");
// const userSchema = require("./models/userModel");
const userRouters = require("./routes/userRouters");
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares");

app.use(express.json());
mongoose.connect(
  "mongodb://127.0.0.1/assignment8db",
  (err) => {
    if (!err) {
      console.log("Connected to db");
    } else {
      console.log(err);
      console.log("Error with connection");
    }
  }
);

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/user/create", userRouters);
app.use("/user/edit", userRouters);
app.use("/user/delete", userRouters);
app.use("/user/getAll", userRouters);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started running on PORT ${PORT}`));