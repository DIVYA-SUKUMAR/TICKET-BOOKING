var express = require("express")
var router=express.Router()
// var app = express()
// var stds = []
const { MongoClient, ObjectId } = require("mongodb")
const { checkPermission } = require("../middleware/CheckPermission")

const url ='mongodb+srv://priya:kmhsZdRhksYQ6uE3@cluster0.licbo.mongodb.net/irctc?retryWrites=true&w=majority';
//insert contact
const client = new MongoClient(url);
client.connect();

router.use(express.urlencoded({ extended: true }))
router.use(express.json())


router.post("/insertfreight",checkPermission(), function (req, res) {
    console.log(req.body)
   client.connect(function (err, conn) {
        var db = conn.db("irctc")
        // db.collection("students").find().toArray(function(req,data){
        db.collection("freight").insertOne(req.body, function (err, data) {
        console.log(data)
        console.log(req.body)
        // res.send("hello")
        })
    })
})

// app.get("/render", function (req, res) {
//     MongoClient.connect(url, function (err, conn) {
//         var db = conn.db("delta")
//         db.collection("irctc").find().toArray(function (req, data) {
//             // res.render("regmongopug", { allstuds1: data })
//             // res.send(data[0].weightEntry.weight)
//             res.send(data)
//         })
//     })
// })

router.get("/render",checkPermission(), function (req, res) {
    client.connect(function (err, conn) {
        var db = conn.db("irctc")
        db.collection("freight").find().toArray(function (req, data) {
            // res.render("regmongopug", { allstuds1: data })
            // res.send(data[0].weightEntry.weight)
            res.send(data)
        })
    })
})
router.get("/renderone/:id",checkPermission(), function (req, res) {
   client.connect(function (err, conn) {
        var db = conn.db("irctc")
        db.collection("freight").findOne({_id:ObjectId(req.params.id)},function(err,data) {
            // res.render("regmongopug", { allstuds1: data })
            // res.send(data[0].weightEntry.weight)
            console.log(data)
            res.send(data)
        
        })
    })
})

// app.get("/delete/:id", function (req, res) {
//     MongoClient.connect(url, function (err, conn) {
//         var db = conn.db("delta")
//         db.collection("irctc").edleteOne({ _id: ObjectId(req.params.id) }, function (err, data) {
//             // res.render("regmongopug",{allstuds1:data})
//             // res.redirect("/render")
//             res.send(data)
//             console.log(data)
//         })
//     })
// })

router.patch("/updatefreight",checkPermission(), function (req, res) {
client.connect(function (err, conn) {
        console.log(req.body)
        var db = conn.db("irctc");
        db.collection("freight")
            .updateOne(
                { sfid:req.body.sfid },
                {
                    $set: {

                        sfname: req.body.sfname,
                    sftype: req.body.sftype,
                    
                    sdeparture:req.body.sdeparture,
                    sarrival:req.body.sarrival,
                    sfrom:req.body.sfrom,
                    sto:req.body.sto,
                    }
                    
                },
                function (err, data) {
                    console.log("update",data)
                    // res.redirect("/render")
                    res.send(data)
                }
            )
    })
})


// app.listen(8080, function (req, res) {
//     console.log("listening on 8080")
// })

module.exports=router;