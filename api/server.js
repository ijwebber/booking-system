require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected To Database"));

app.use(cors());
app.use(express.json());

app.listen(8000, () => console.log("Server has started!"));
