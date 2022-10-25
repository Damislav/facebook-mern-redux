const express = require("express");
const app = express();
const cors = require("cors");
const { readdirSync } = require("fs");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

// options
const options = {
  origin: "http://localhost:3100",
  useSuccessStatus: 200,
};
// middlewarw
app.use(cors(options));
app.use(express.json());
app.use(morgan("dev"));

//  DATABASE
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to database");
  });
// routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
