const express =  require("express")
const router =  express.Router()
const { MongoClient ,ObjectId} = require('mongodb');
const { checkPermission } = require("../middleware/CheckPermission");
const url ='mongodb+srv://priya:kmhsZdRhksYQ6uE3@cluster0.licbo.mongodb.net/irctc?retryWrites=true&w=majority';
//insert contact
const client = new MongoClient(url);
client.connect();
router.get("/getBooking",checkPermission(),(req,res)=>{
    client.connect((err,con)=>{
        var db = con.db("irctc")
        db.collection("bookings").find().toArray((err,data)=>{
            console.log(data);
            res.send(data)
        })
        })
})

router.get("/getBookingActive",checkPermission(),(req,res)=>{
    client.connect((err,con)=>{
        var db = con.db("irctc")
        db.collection("bookings").find({record_status: 1}).toArray((err,data)=>{
            console.log(data);
            res.send(data)
        })
        })
})

router.post("/getBookingParticular",checkPermission(),(req,res)=>{
   client.connect((err,con)=>{
    var db = con.db("irctc")
     db.collection("bookings").findOne({_id:ObjectId(req.body._id)},(err,data)=>{
       res.send(data)
     })
     
    });
  
})

router.post("/booking",checkPermission(),(req,res)=>{
    console.log(req.body)
    client.connect((err,con)=>{
    var db = con.db("irctc")
     db.collection("bookings").insertOne(req.body,(err,data)=>{
         console.log(data.insertedId);
         res.send(data.insertedId)
     })
    });
})


router.patch('/deleteBooking-soft',checkPermission(),(req,res)=>{
    console.log(req.params);
    client.connect((err,con)=>{
        var db = con.db("irctc")
         db.collection("bookings").updateOne({_id:ObjectId(req.body._id)},
         {
             $set:{
                record_status:0
             }
         },
         function(err,data){
             console.log(data)
             res.send("deleted successfully")
         })
        });
})

router.patch('/updateCount',checkPermission(),(req,res)=>{
    console.log(req.body);
   client.connect((err,con)=>{
        var db = con.db("irctc")
         db.collection("bookings").updateOne({_id:ObjectId(req.body._id)},
         {
             $set:{
                 pnrno:"PNR-"+req.body._id,
                 passengerCount:req.body.passengerCount,
               
             }
         },
         function(err,data){
             console.log(data)
             res.send("updated successfully")
         })
        });
})

router.patch('/updateStatus',checkPermission(),(req,res)=>{
    console.log(req.body);
   client.connect((err,con)=>{
        var db = con.db("irctc")
         db.collection("bookings").updateOne({_id:ObjectId(req.body._id)},
         {
             $set:{
                 amount:req.body.amount,
                 status:req.body.status
               
             }
         },
         function(err,data){
             console.log(data)
             res.send("updated successfully")
         })
        });
})
router.delete('/deleteBooking/:id',checkPermission(),(req,res)=>{
    console.log(req.params);
    client.connect((err,con)=>{
        var db = con.db("irctc")
         db.collection("bookings").deleteOne({_id:ObjectId(req.params.id)},(err,data)=>{
             console.log(data);
             res.send("deleted successfully")
         })
        });
})


module.exports = router;