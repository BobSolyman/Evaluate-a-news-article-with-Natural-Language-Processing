const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

dotenv.config();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const API_URL = "https://api.meaningcloud.com/sentiment-2.1";
const API_KEY = process.env.API_KEY;

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/add-url", async (req, res) => {
  try {
    const url = req.body.userURL;
    const theLink = `${API_URL}?key=${API_KEY}&url=${url}&lang=en`;
    const response = await axios(theLink);
    console.log(response);
    res.send(
      ({
        score_tag,
        agreement,
        subjectivity,
        confidence,
        irony,
      } = response.data)
    );
  } catch (error) {
    console.log(error.message);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
  console.log("App listening on port 8083!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// <title>Sentiment Analyzer</title>
// <link rel="stylesheet" href="/styles/resets.css" />
// <link rel="stylesheet" href="/styles/base.css" />
// <link rel="stylesheet" href="/styles/header.css" />
// <link rel="stylesheet" href="/styles/form.css" />
// <link rel="stylesheet" href="/styles/footer.css" />
