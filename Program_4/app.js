const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const path = require('path')

const db = require("./db")
const collection1 = "StudentDetails"
const collection2 = "DepartmentDeatils"

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/getStudentName",(req,res)=>{
    db.getDB().collection(collection1).find({}).toArray((err,documents)=>{
        if(err)
            console.log(err);
        else{
            // console.log("In the route...");
            //console.log(documents);
            res.json(documents);
        }
    })
})

app.get("/getstudentbydept",(req,res)=>{
    db.getDB().collection(collection1).aggregate({$lookup:{from:"DepartmentDeatils",localField:"DepartmentId",foreignField:"DepartmentId",as:"student_details"}},{$group:{_id:"$DepartmentId","StudentName":{$push:"$StudentName"},"DepartmentName":{$push:"$student_details.DepartmentName"},"Staff":{$push:"$student_details.Staff"}}}).toArray((err,documents)=>{
        if(err)
            console.log(err);
        else{
            // console.log("In the route...");
            console.log(documents);
            res.json(documents);
        }
    })
})

app.get("/getDepartmentName",(req,res)=>{
    db.getDB().collection(collection2).find({}).toArray((err,documents)=>{
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
app.put("/student/:id",(req,res)=>{
    const studentID = req.params.id;
    const userInput = req.body;
    console.log("In update method...of student");
    console.log(userInput);
    db.getDB().collection(collection1).findOneAndUpdate({_id : db.getPrimaryKey(studentID)},{$set : {StudentName : userInput.StudentName, StudentId: userInput.StudentId, DepartmentId: userInput.DepartmentId, Address: userInput.Address, City: userInput.City}},{returnOroginal: false}, (err, result)=>{
        if(err)
            console.log(err);
        else{
            console.log(result);
            console.log("here");
            res.json(result);
        }
    })
})
//update
app.put("/department/:id",(req,res)=>{
    const departmentID = req.params.id;
    const userInput = req.body;
    console.log("In update method...of department");
    console.log(userInput);
    db.getDB().collection(collection2).findOneAndUpdate({_id : db.getPrimaryKey(departmentID)},{$set : {DepartmentName : userInput.DepartmenName, DepartmenId: userInput.DepartmenId, Staff: userInput.Staff}},{returnOroginal: false}, (err, result)=>{
        if(err)
            console.log(err);
        else{
            console.log(result);
            res.json(result);
        }
    })
})
//create
app.post("/addstudent",(req,res)=>{
    const userInput = req.body;
    console.log(userInput);
    db.getDB().collection(collection1).insertOne(userInput,(err,result)=>{
        if(err)
            console.log(err)
        else{
            console.log("In the route...");
            res.json({result : result, document : result.ops[0]});
        }
    });
});
//create
app.post("/adddepartment",(req,res)=>{
    const userInput = req.body;
    console.log(userInput);
    db.getDB().collection(collection2).insertOne(userInput,(err,result)=>{
        if(err)
            console.log(err)
        else{
            console.log("In the route...");
            res.json({result : result, document : result.ops[0]});
        }
    });
});
//delete
app.delete("/student/:id",(req,res)=>{
    const studentID = req.params.id;
    console.log("reached..in delete method");
    db.getDB().collection(collection1).findOneAndDelete({_id : db.getPrimaryKey(studentID)},(err, result)=>{
        if(err)
            console.log(err)
        else{
            res.json(result);
        }        
    })
})

//delete
app.delete("/department/:id",(req,res)=>{
    const departmentID = req.params.id;
    console.log("reached..in delete method");
    db.getDB().collection(collection2).findOneAndDelete({_id : db.getPrimaryKey(departmentID)},(err, result)=>{
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