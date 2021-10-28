require("dotenv").config()
const express = require("express")
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const Booking = require('./routes/Booking')
const Train = require('./routes/Train')
const Pnr = require("./routes/pnr")
const passenger = require('./routes/Passenger')
const Payment = require('./routes/Payment')
const Freight = require('./routes/irctc_freight')
const Contact = require('./routes/contactroutes')
const User = require('./routes/User')
app.use('/Train',Train)
app.use('/Booking',Booking)
app.use('/Pnr',Pnr )
app.use('/passenger',passenger)
app.use('/Payment',Payment)
app.use('/Freight',Freight)
app.use('/Contact',Contact)
app.use('/User',User)
app.get('/',(req,res)=>{
 console.log(res);  
})
//app.listen(process.env.PORT || 7000);
const port = process.env.port || 8080 ;
app.listen(port,()=>{
   console.log("server listening to port "+port);
})
