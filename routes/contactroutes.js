var express = require("express");
var router = express.Router();
const{MongoClient,ObjectId} = require('mongodb');
const { checkPermission } = require("../middleware/CheckPermission");
const url ='mongodb+srv://priya:kmhsZdRhksYQ6uE3@cluster0.licbo.mongodb.net/irctc?retryWrites=true&w=majority';
//insert contact
const client = new MongoClient(url);
client.connect();
router.post("/insertcontact",function(req,res){
    console.log(req.body);
   client.connect(function(err,con){
        var db = con.db("irctc")
        db.collection('contact').insertOne(req.body,function(err,data){
            console.log(data)
            res.send(data)
        })
    })
})
router.get("/contactlist",function(req,res){
    client.connect(function(err,con){
        var db = con.db("irctc")
        db.collection('contact').find().toArray(function(err,data){
            console.log(data)
            res.send(data)
        })
    })
})
router.get("/viewcontact/:id",function(req,res){
   client.connect(function(err,con){
        var db = con.db("irctc")
        db.collection('contact').findOne({_id:ObjectId(req.params.id)},function(err,data){
            res.send(data)
        })
    })
})
router.get("/deletecontact/:id",function(req,res){
    client.connect(function(err,con){
        var db = con.db("irctc")
        db.collection('contact').deleteOne({_id:ObjectId(req.params.id)},function(err,data){
            res.send(data)
        })
    })
})
router.post("/updatecontact",function(req,res){
    client.connect(function(err,conn){
        console.log(req.body)
        var db = conn.db("irctc");
        db.collection("contact")
        .updateOne(
            {_id:ObjectId(req.body._id)},
            {
                
                $set:{
                   status : req.body.status
                }
            },
            function(err,data){
                console.log(data)
                res.send(data)
            }
        )
    })
})
module.exports = router