import React,{useState} from "react";
import "./style.css";
import {Link} from 'react-router-dom';
import { RiTrainWifiFill } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import BasicModal from "./modal1";
import axios from 'axios';


export default function Pnr() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [pnr,setpnr]=useState({});
    const Token = () => localStorage.getItem("user");

    const onSubmit = data => {
      console.log(data);
      handleOpen()
      axios.post('http://localhost:7000/Pnr/viewpnr',data,{
        headers:{authorization:`Bearer ${Token()}`}
       }).then((res)=>{setpnr(res.data);})
      console.log(data)};
    return (
   <div class="container">
   <div class="topnav" id="myTopnav">
   <Link to="/home">HOME</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/pnr">PNR ENQUIRY</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/reserved">RESERVED TRAIN BETWEEN STATIONS</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/fareseat">FARE AND SEAT ENQUIRY</Link> &nbsp;&nbsp;&nbsp;
</div>

    <div class="heading" >
        <i class="fa-train"><RiTrainWifiFill/></i>
        <h1 class="head">PASSENGER RESERVATION ENQUIRY</h1>
      </div>
      <div class= "all" style={{textAlign:'center',height:' 80%'}}>
      <div style={{overflow:"auto"}}>
        <div class="menu">
          <a class="s">Services</a>
          <a class="s">information</a>
        </div>
        <div class="main">
          
          <h2 class="bar">PASSENGER CURRENT STATUS ENQUIRY</h2>
          <div>
          
          <form class="f1" onSubmit={handleSubmit(onSubmit)} >
            <p>Enter the PNR for your booking below to get the current status. You will find it on the top left corner of the ticket.</p>
              <label class="lab">Enter PNR No.</label>
              <input class="textinput" type="text" placeholder="Enter PNR No."  {...register("pnr", {
    required: '*Pnr no is required' })}></input><br/>
    {errors.pnr && (
        <small className="text-danger">{errors.pnr.message}</small>
      )}
              <div class="button">
             
              
              <BasicModal data={pnr} open={open} close={handleClose}/>&nbsp;&nbsp;&nbsp;
              </div>
          </form>
        </div></div>
          <div class="footer">© Copyright Train Ticket Booking 2021 Site | terms of use | Privacy  policy </div>
      </div>
      </div>
   </div>
  );
}