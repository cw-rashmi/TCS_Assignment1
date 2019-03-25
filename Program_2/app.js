const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path')

const db = require("./db")
const collection = "EmployeeDetails"

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/getEmployeeName",(req,res)=>{
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
app.put("/:id",(req,res)=>{
    const employeeID = req.params.id;
    const userInput = req.body;
    console.log("In update method...");
    console.log(userInput);
    db.getDB().collection(collection).findOneAndUpdate({_id : db.getPrimaryKey(employeeID)},{$set : {Name : userInput.Name, EmployeeID: userInput.EmployeeID, Field: userInput.Field, Address: userInput.Address, City: userInput.City}},{returnOroginal: false}, (err, result)=>{
        if(err)
            console.log(err);
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
    const employeeID = req.params.id;
    console.log("reached..");
    db.getDB().collection(collection).findOneAndDelete({_id : db.getPrimaryKey(employeeID)},(err, result)=>{
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