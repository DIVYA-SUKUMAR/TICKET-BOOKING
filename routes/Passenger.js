var express= require('express')
//var apps = express();
const { MongoClient } = require('mongodb');
var ObjectId = require('mongodb').ObjectId;
const url ='mongodb+srv://priya:kmhsZdRhksYQ6uE3@cluster0.licbo.mongodb.net/irctc?retryWrites=true&w=majority';
//insert contact
const client = new MongoClient(url);
client.connect();
const { checkPermission } = require("../middleware/CheckPermission");
var router=express();
router.use(express.urlencoded({ extended: true }))
router.use(express.json());




     router.post("/addpassenger",checkPermission(),function(req,res){   
console.log(req.body);
   client.connect(function(err,conn){
     var db = conn.db("irctc");
     db.collection('passenger').insertOne(req.body,function(err,data){
        res.send(data);
     })
   })
})



module.exports = router;