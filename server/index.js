require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db")
const imageRoute = require("./routes/imageRoute")
const hostname = '0.0.0.0'

// middlewares
app.use(express.json());
app.use(cors());

// database connection
connection();

// image route
app.use("/api/", imageRoute);


const port = process.env.PORT || 8080;
app.listen(port, hostname,  console.log(`Listening on port ${port}...`));