import React, { useState,useEffect } from 'react';
import './Payment.css'
import {useRef} from 'react';
// import { useHistory } from 'react-router-dom';
import {MdDateRange} from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import axios from 'axios';
import BasicModal from './Pay';
import './Payment.css'

function Payment(props) { 
  console.log(props);
  const [open, setOpen] = useState(false);
  const [show,setShow]=useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let amount = 0;
 const {location:{state}} = props;
    console.log("props",state);
    if(state.class === 'AC 2 Tier (2A)'){
     amount=2070
    }
    else if(state.class === 'AC 3 Tier (3A)'){
      amount=1500
    }
    else if(state.class === 'Sleeper (SL)'){
      amount=680
    }
    else if(state.class === 'Ac First Class (FC)'){
      amount=2570
    }
    else if(state.class === 'Second Sitting (2S))'){
      amount=390
    }
        const { register, handleSubmit, formState: { errors } } = useForm();

        const Token = () => localStorage.getItem("user");

const total = amount*state.Passengers;

        const onSubmit = (data) =>{
          handleOpen()
        axios.post("http://localhost:7000/Payment/insert",{data},{
          headers:{authorization:`Bearer ${Token()}`}
         }
       )
        .then((res)=> {
          axios.patch("http://localhost:7000/Booking/updateStatus",
            {_id:state.booking_id,amount:total,status:"confirmed"
             },{
              headers:{authorization:`Bearer ${Token()}`}
             }
           ).then((res)=>{
               console.log(res.data);
             
             })
          setShow(data);
    
        })
      }
    return (
        <div>
        <div className="divsheader">
        <h2 className="divshh"><center>Payment Information </center></h2>
      </div> 
<div className="divsrow">
<div className="divscol-75">
<div className="divscontainer">
    <h2><center>Payment Form</center></h2>

<form id="validate" onSubmit={handleSubmit(onSubmit)}>

<div className="divsrow">
<div className="divscol-50">
<label className="divsdd" for="fname"><FaUser/> Full Name</label>
<input className="divsss" type="text" id="fname" placeholder="Full Name"  name="fullname"  {...register("fullname", {required: '*Name Required', pattern:{value: /^[A-Za-z]/,message:"*Invalid Character"} })}/><br/>
{/* value={insert} onChange={(e)=>setInsert(e.target.value)} */}
  {errors.fullname && (<small className="errorms">{errors.fullname.message}</small>)}

<label className="divsdd" for="email"><FiMail/> Email</label>
<input className="divsss" type="text" id="email" name="email" placeholder="Full Mail" {...register("email", {required:"*Email Required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,
      message: '*Email is Invalid' 
    }
  })}/><br/>
   {errors.email && (<small className="errorms">{errors.email.message}</small> )}

<label className="divsdd" for="dob"><MdDateRange/> Date Of Birth</label>
<input className="divsss" type="date" id="dob" name="dob" {...register("dob", {
    required: '*Date Of Birth Required' 
  })}/><br/>
  {errors.dob && (<small className="errorms">{errors.dob.message}</small> )}

<label className="divsdd" for="gender" ><FaUser/> Gender</label>
<select className="divsff" name="gender" {...register("gender", {
    required: '*Gender Required' 
  })}>
    <option value="">Select</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    </select><br/>
    {errors.gender && (<small className="errorms">{errors.gender.message}</small> )}

</div>
<div className="divscol-50">
<label className="divsdd" for="card"><AiFillCreditCard/> Card Type</label>
<select className="divsff" name="card" {...register("card", {
    required: '*Card Type Required' 
  })}>
    <option value="">Select</option>
    <option value="credit">CreditCard</option>
    <option value="debit">DebitCard</option>
    <option value="cashcard">CashCard</option>
    </select><br/>
    {errors.card && (<small className="errorms">{errors.card.message}</small> )}
 
<label className="divsdd" for="cname">Name on Card</label>
<input className="divsss" type="text" id="cname" name="cardname" placeholder="Name Here" {...register("cardname", {
    required: '*Card Name Required', pattern:{value: /^[A-Za-z]/,message:"*Invalid Character"} })}/><br/>
  {errors.cardname && (<small className="errorms">{errors.cardname.message}</small> )}

<label className="divsdd" for="ccnum">Card number</label>
<input className="divsss" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" {...register("cardnumber", {
      minLength: {
        value: 16,
        message: '*Maximum of 16 numbers Required'
    },
    maxLength: {
      value: 16,
      message: '*Only 16 numbers allowed'
  },
    required: '*Card Number Required'
  })}/><br/>

{errors.cardnumber && (<small className="errorms">{errors.cardnumber.message}</small> )}
<label className="divsdd" for="expmonth">Exp Month</label>

  <select className="divsff" id="expmonth" name="expmonth" placeholder="Month" {...register("expmonth", {
    required: '*Month Required' 
  })}>
    <option value="">Select</option>
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="March">March</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
    </select>
<br/>
{errors.expmonth && (<small className="errorms">{errors.expmonth.message}</small> )}
<div className="divsrow">
    <div className="divscol-50">
        <label className="divsdd" for="expyear">Expiry Year</label>

        <input type="text" className="divsss" id="expyear" name="expyear" placeholder="Year" {...register("expyear",{

minLength: {

  value: 4,

  message: '*Enter Correct Year'

},

maxLength: {

value: 4,

message: '*Enter Correct Year'

},

required: '*Year Required'

})}/><br/>

{errors.expyear && (<small className="errorms">{errors.expyear.message}</small> )}
        

    </div>
    <div className="divscol-50">
        <label className="divsdd" for="cvv">CVV</label>
        <input className="divsss" type="text" id="cvv" name="cvv" placeholder="xxx" {...register("cvv", {
          minLength: {
            value: 3,
            message: '*Min 3 numbers'
        },
        maxLength: {
          value: 3,
          message: '*Max 3 numbers'
      },
          required: '*CVV Required' 
          
  })}/><br/>
  {errors.cvv && (<small className="errorms">{errors.cvv.message}</small> )}

    </div>
</div>
</div>
</div>
<BasicModal data={show} amount={total} open={open} close={handleClose}/>


</form>
</div>
    </div>
    <div className="divscol-25">
          <div className="divscontainer1">
            <h4> <center>Total</center><span className="divsprice" style={{color:"black"}}></span></h4>
            <p className="divsp">Base Fare <span className="divsprice">{total}</span></p>
            <p className="divsp">Convenience Fee <span className="divsprice">0.00</span></p>
            <p className="divsp">Tax(16.00%) <span className="divsprice">0.00</span></p>
            <hr className="divscc"/>
            <p className="divsp">Total Amount <span className="divsprice" style={{color:"black"}}><b>INR {total}</b></span></p>
        </div>
    </div>
</div>
<br/>
        </div>
    )
}
export default Payment
