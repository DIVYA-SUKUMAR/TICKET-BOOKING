const express = require("express");
const router=express.Router();
const { MongoClient, ObjectId } = require('mongodb');
const url ='mongodb+srv://priya:kmhsZdRhksYQ6uE3@cluster0.licbo.mongodb.net/irctc?retryWrites=true&w=majority';
//insert contact
const client = new MongoClient(url);
client.connect();
const { checkPermission } = require("../middleware/CheckPermission");
router.use(express.urlencoded({extended:true}));
router.use(express.json())


router.post("/insert",checkPermission(),function (req, res) {
    console.log(req.body)
    client.connect(function (err,conn) {
        var db = conn.db("irctc");
        db.collection("payment").insertOne(req.body, function (err, data) {
            res.send(data)
        })
    })
})
module.exports = router
