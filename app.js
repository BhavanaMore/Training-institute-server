const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://topper:Topper123@training-institute-app.4avyc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("connected to db");
});

conn.on("error", () => {
  console.log("could not connected to db");
});
conn.on("disconnected", () => {
  console.log("could not connected to db");
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  city: String,
  status: Number,
});

const UserModel = mongoose.model("User", userSchema);

const doc = new UserModel({
  name: "Topper Skills",
  age: 5,
  city: "Pune",
  status: 1,
});
doc
  .save()
  .then((result) => {
    console.log("Created.. ", result);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
