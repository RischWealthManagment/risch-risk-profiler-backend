require("dotenv").config();

const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URL;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("connected to mongo"))
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
