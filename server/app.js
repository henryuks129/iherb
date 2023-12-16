const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

// CONFIGURATIONS
require("dotenv").config();

// CORS MIDDLEWARE
app.use(cors());

// MIDDLEWARE(FOR JSON USAGE)
app.use(express.json());

// ENVIRONMENTAL VARIABLES
let db_url = process.env.DBURL;

// MONGO-DB CONNECTION
mongoose
  .connect(db_url)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
