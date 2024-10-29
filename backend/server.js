require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Endpoints
app.get("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (err) {
    consolle.error(err.message);
    res.status(500).send("Server error");
  }
});

app.post("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (err) {
    consolle.error(err.message);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
