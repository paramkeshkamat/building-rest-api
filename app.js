const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRoutes");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

mongoose.connect(
  process.env.DB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  },
  () => console.log("DB connected!")
);

app.get("/", (req, res) => res.send("Home Page"));
app.use("/posts", postRoutes);
app.use((req, res) => res.status(404).send("Page not found!"));

app.listen(8001);
