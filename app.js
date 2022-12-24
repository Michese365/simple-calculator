const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let firstNum = Number(req.body.fNum);
  let secondNum = Number(req.body.sNum);
  let sign = req.body.sign;
  let answer;

  if (sign === "+") {
    answer = add(firstNum, secondNum);
  } else if (sign === "-") {
    answer = subtract(firstNum, secondNum);
  } else if (sign === "/") {
    answer = divide(firstNum, secondNum);
  } else if (sign === "*") {
    answer = multiply(firstNum, secondNum);
  } else {
    answer = "not able to be processed! Try again";
  }

  function add(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
  }

  function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
  }

  function divide(firstNum, secondNum) {
    return firstNum / secondNum;
  }
  //   let answer = firstNum + secondNum;
  res.send("Your answer is " + answer);
});

app.listen(3000, function (req, res) {
  console.log("Server running on port 3000");
});
