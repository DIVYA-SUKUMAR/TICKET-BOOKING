import React,{useState} from "react";
import "./style.css";
import {Link} from 'react-router-dom';
import { RiTrainWifiFill } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import BasicModal from "./modal2";
import axios from 'axios';
export default function Fareseat() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [data,setdata]=useState({});
  const Token = () => localStorage.getItem("user");

  const onSubmit = data => {
    handleOpen()
    console.log(data);
    axios.get(`http://localhost:7000/Pnr/viewtrainfare/${data.tno}/${data.date}/${data.source}/${data.destination}/${data.class}/${data.quota}`,{
      headers:{authorization:`Bearer ${Token()}`}
     }).then((res)=>{setdata(res.data);})
     }
  return (
   <div class="container">
    <div class="topnav" id="myTopnav">
    <Link to="/home">HOME</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/pnr">PNR ENQUIRY</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/reserved">RESERVED TRAIN BETWEEN STATIONS</Link> &nbsp;&nbsp;&nbsp;
    <Link to="/fareseat">FARE AND SEAT ENQUIRY</Link> &nbsp;&nbsp;&nbsp;
</div>
<div class="heading">
       <i class="fa-train"><RiTrainWifiFill/></i>
      <h1 class="head">PASSENGER RESERVATION ENQUIRY</h1>
     </div>
     <div class= "all" style={{textAlign:'center',height:' 80%'}} >
     <div style={{overflow:"auto"}}>
       <div class="menu">
         <a class="s" href="#">Services</a>
         <a class="s" href="#">information</a>
       </div>
       <div class="main">
         
         <h2 class="bar">AVAILABILITY AND FARE ENQUIRY</h2>
         <div class="all2">
         <form class="f3" onSubmit={handleSubmit(onSubmit)}>
             <div class="revf">
             <label class="lab" >Enter Train Number</label>
             <input class="textinput" type="text" placeholder="Enter Train No." {...register("tno", {
    required: '*train no is required' })}></input>
    </div>
    {errors.tno && (
        <small className="text-danger">{errors.tno.message}</small>
      )}
             <div class="revf" >
               <label class="lab">Enter Journey Date</label>
               <input class="textinput" type="date" placeholder="Enter Journey Date" {...register("date", {
    required: '*date is required' })}></input>
   </div>
    {errors.date && (
      <small className="text-danger">{errors.date.message}</small> )}
               <div class="revf">
               <label class="lab">Enter Source Station</label>
               <input class="textinput" type="text" placeholder="Enter Source Station" {...register("source", {
    required: '*source is required' })}></input>
    </div>
    {errors.source && (
      <small className="text-danger">{errors.source.message}</small>
    )}
              <div class="revf">
               <label class="lab">Enter Destination Station</label>
              <input class="textinput" type="text" placeholder="Enter Destination Station " {...register("destination", {
    required: '*destination is required' })}></input>
    </div>{errors.destination && (
        <small className="text-danger">{errors.destination.message}</small>
      )}
              <div class="revf">
               <label class="lab">Enter Class</label>
               <select name="class" class="cars" Placeholder="Enter Class"  {...register("class",{required: '*class is required'})}>
                   <option value="">Select</option>
                   <option value="firstAC">firstAC</option>
                   <option value="firstclass">First Class</option>
                   <option value="executiveclass">Executive class </option>
                   <option value="sleeperclass">sleeper class</option>
                 </select></div>{errors.class && (
        <small className="text-danger">{errors.class.message}</small>
      )}
                 <div class="revf">
                   <label class="lab">Enter Quota</label>
                   <select name="quota" class="cars" Placeholder="Enter Quota" {...register("quota",{required: '*quota is required'})}>
                       <option value="">Select</option>
                       <option value="tatkalquota">tatkalquota</option>
                       <option value="ladiesquota">ladiesquota</option>
                       <option value="lowerberthquota">lowerberthquota</option>
                       <option value="generalquota">generalquota</option>
                     </select></div>{errors.quota && (
        <small className="text-danger">{errors.quota.message}</small>
      )}
              
              <div class="button">
             <BasicModal data={data} open={open} close={handleClose}/>
             
             </div>
         </form></div>
       </div>
         <div class="footer">© Copyright Train Ticket Booking 2021 Site | terms of use | Privacy  policy </div>
       </div>
       </div>
       </div>
  );
}