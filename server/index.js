require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

const API_KEY = process.env.API_KEY.toString();

// adding body-parser and cors
// const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message}],
      max_tokens: 3000,
     }),
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
