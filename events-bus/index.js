const express = require('express');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());
app.get("/hello",(req, res) => res.send("hello world"));
app.post("/events",  (req, res) => {

  evnt = req.body;
    axios.post("http://localhost:4000/events",evnt)
    axios.post("http://localhost:4001/events",evnt)
    axios.post("http://localhost:4004/events",evnt)
  console.log("events called");
    res.send({ status: "ok" });
})

app.listen(4005,()=>{
    console.log("lissten")
})
