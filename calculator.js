const express = require('express');
const bodyParser = require("body-parser");

const app = new express();
app.use(express.urlencoded({extended: true}));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("The result is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
})

app.get("/bmiCalculator", function(req, res){ // localhost:3000/bmiCalculator
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/(height * height);
  res.send("Your BMI is " + bmi);
});
