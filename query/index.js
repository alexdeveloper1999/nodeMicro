const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts={};
app.get("/posts",(req,res)=>{
    
}) 



app.post("/events",(req,res)=>{
debugger
    let {type,data}=req.body;
    if(type=="PostCreated"){
        let {id,title}=data;
        posts[data.id]={id,title,comments:[]}
     }

    if(type=="CommentCreated"){
     
        let {id,content,postId}=data;
        posts[postId].comments.push({id,content});
 
        }

    console.log(posts);
    res.send(posts);

}) 



 app.listen(4004,()=>{

    console.log("lissten to 4004 port");
 })