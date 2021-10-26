var express = require("express");
var router = express.Router();
const{MongoClient,ObjectId} = require('mongodb')
const url ='mongodb+srv://priya:kmhsZdRhksYQ6uE3@cluster0.licbo.mongodb.net/irctc?retryWrites=true&w=majority';
//insert contact
const client = new MongoClient(url);
client.connect();
const { checkPermission } = require("../middleware/CheckPermission");
//view train details
router.get("/viewtraindetails/:date/:source/:destination",checkPermission(),function(req,res){
 
    client.connect(function(err,con){

        var db = con.db("irctc")

        db.collection("alltraindetails").findOne({arrivaldate:(req.params.date),source:(req.params.source),destination:(req.params.destination)},function(err,data){

            res.send(data)

        })

    })

})
router.post("/inserttraindetails",checkPermission(), function (req, res) {
    client.connect(function (err, conn) {
        var db = conn.db("irctc");
        db.collection("alltraindetails").insertOne(req.body, function (err, data) {
            res.send(data)
        })
    })
})

//viewtrainfareandseat details
router.get("/viewtrainfare/:tno/:date/:source/:destination/:class/:quota",checkPermission(),function(req,res){
    console.log(req.params.tno)
    client.connect(function(err,con){
        var db = con.db("irctc")
        db.collection("alltraindetails").findOne({trainno:Number(req.params.tno),source:(req.params.source),destination:(req.params.destination),journeyclass:(req.params.class),quota:(req.params.quota),arrivaldate:(req.params.date)},function(err,data){
            res.send(data)
        })
    })
})

//view pnr status
router.post("/viewpnr",checkPermission(),function(req,res){
    console.log(req.body);
    client.connect(function(err,con){
        var db = con.db("irctc")
        db.collection('bookings').findOne({pnrno:req.body.pnr},function(err,data){
            console.log(data);
            res.send(data)
        })
    })
})
//insertpnr

module.exports = router