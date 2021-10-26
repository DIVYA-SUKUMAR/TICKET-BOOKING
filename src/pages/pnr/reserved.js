import React,{useState} from "react";
import "./style.css";
import {Link} from 'react-router-dom'
import { RiTrainWifiFill } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import axios from 'axios';
import BasicModal from "./modal";
export default function Reserved() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [data,setdata]=useState({});
    const Token = () => localStorage.getItem("user");
const onSubmit = data => {
      handleOpen()
      console.log(data)
      axios.get(`http://localhost:7000/Pnr/viewtraindetails/${data.date}/${data.source}/${data.destination}`,{
        headers:{authorization:`Bearer ${Token()}`}
       }
         ).then((res)=>{setdata(res.data);})
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
        <i class="fa fa-train"><RiTrainWifiFill/></i>
        <h1 class="head">PASSENGER RESERVATION ENQUIRY</h1>
      </div>
      <div class= "all" style={{textAlign:'center',height:' 80%'}} >
      <div style={{overflow:"auto"}}>
        <div class="menu">
          <a class="s" >Services</a>
          <a class="s" >information</a>
        </div>
        <div class="main">
          
          <h2 class="bar">RESERVED TRAIN BETWEEN STATIONS</h2>
          <div class="all2">
          <form class="f2"onSubmit={handleSubmit(onSubmit)}>
              <div class="revf">
              <label class="lab" >Enter Journey Date</label>
              <input class="textinput" type="date" placeholder="Enter journey date." {...register("date", {
    required: '*date is required' })} ></input>
             
              </div>{errors.date && (
    <small className="text-danger">{errors.date.message}</small>
  )}
              <div class="revf" >
                <label class="lab">Enter Source Station</label>
              <input class="textinput" type="text" placeholder="Enter Source Station" {...register("source", {
    required: '*source is required' 
  })}></input>
    </div>{errors.source && (
    <small className="text-danger">{errors.source.message}</small>)}
              <div class="revf">
                <label class="lab">Enter Destination Station</label>
              <input class="textinput" type="text" placeholder="Enter Destination Station " {...register("destination", {
    required: '*destination is required' })}></input>
    </div>
    {errors.destination && (
    <small className="text-danger">{errors.destination.message}</small>)}
              <div class="button" >
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