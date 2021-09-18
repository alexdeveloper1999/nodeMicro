const express = require('express');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());
app.post("events", async (req, res) => {

    evnt = req.body();
  await  axios.post("http://localhost:4001/events")
  await axios.post("http://localhost:4002/events")
    res.send({ status: "ok" });
})

app.listen(4005,()=>{
    console.log("lissten")
})
