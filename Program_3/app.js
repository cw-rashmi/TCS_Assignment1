const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path')

const db = require("./db")
const collection = "BorrowerRequest"

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/getBorrowerDetails",(req,res)=>{
    db.getDB().collection(collection).find({}).toArray((err,documents)=>{
        if(err)
            console.log(err);
        else{
            // console.log("In the route...");
            //console.log(documents);
            res.json(documents);
        }
    })
})
//update
app.put("/ap/:id",(req,res)=>{
    const requestID = req.params.id;
    const userInput = req.body;
    console.log("In update method...");
    console.log(userInput);
    db.getDB().collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(requestID)},{$set : {BorrowerName : userInput.BorrowerName, RequestID: userInput.RequestID, Field: userInput.Field, Address: userInput.Address, location: userInput.location, Mobile: userInput.Mobile, account: userInput.account, RequestedAmount: userInput.RequestedAmount, status: userInput.status}},{returnOroginal: false}, (err, result)=>{
        if(err)
            console.log(err);
        else{
            console.log(result);
            res.json(result);
        }
    })
})
//update on closed
app.put("/update",(req,res)=>{
    const userInput = req.body;
    console.log("reached...");
    console.log(userInput);
    db.getDB().collection(collection).updateMany({account : userInput.account},{$set : {status: userInput.status}},{returnOroginal: false}, (err, result)=>{
        if(err){
            console.log("error...");
            console.log(err);
        }
        else{
            console.log(result);
            res.json(result);
        }
    })
})
//create
app.post("/",(req,res)=>{
    const userInput = req.body;
    console.log(userInput);
    db.getDB().collection(collection).insertOne(userInput,(err,result)=>{
        if(err)
            console.log(err)
        else{
            console.log("In the route...");
            res.json({result : result, document : result.ops[0]});
        }
    });
});
//delete
app.delete("/:id",(req,res)=>{
    const requestID = req.params.id;
    console.log("reached..");
    db.getDB().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(requestID)},(err, result)=>{
        if(err)
            console.log(err)
        else{
            res.json(result);
        }        
    })
})

db.connect((err)=>{
    if(err){
        console.log("unable to connect to database");
        process.exit(1);
    }
    else{
        app.listen(3000, ()=>{
            console.log("connected to database...")
        });
    }
})