import React,{useState} from "react";
 import "./style1.css"
import image1 from '../../assets/contactpic.jpg'
import { useForm } from "react-hook-form";
import axios from 'axios';
import BasicModal from "./modals";
export default function Contact() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, watch, formState: { errors }, reset, trigger, } = useForm();
  
  const onSubmit = data => {
    handleOpen();
    axios.post("http://localhost:7000/Contact/insertcontact", { data })
  }
  return (
    <div>
     
      <div class="tcon">
        <div class="tcontainer">
          <div class="tcontent">
            <div class="timage-box">
              <img class="tcontactimg" src={image1} alt="" />
            </div>
            <form class="tcontactform" onSubmit={handleSubmit(onSubmit)}>
              <div class="ttopic">Send us a message</div>
              <div class="tinput-box">
                <input type="text" class="ttextbox" placeholder="Enter Your Name" {...register("name", {
                  required: '*Name is required'
                })} />
                {/* <label>Enter your name</label> */}
              </div>{errors.name && (
                <small className="ttext-danger">{errors.name.message}</small>
              )}
              <div class="tinput-box" >
                <input type="ttext" class="ttextbox" placeholder="Enter Your Email"  {...register("email", {
                  required: "*Email is Required",

                  pattern: {

                    value: /^[A-Z0-9._%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i,

                    message: '*Email is Invalid'

                  }

                })} />
                {/* <label>Enter your email</label> */}
              </div>{errors.email && (
                <small className="ttext-danger">{errors.email.message}</small>
              )}
              <div class="tmessage-box">
                {/* <label>Enter your message</label> */}
                <textarea class="tmsgbox" placeholder="Enter Your Message" {...register("msg", {
                  required: '*Message is required'
                })}></textarea>
              </div>{errors.msg && (
                <small className="ttext-danger">{errors.msg.message}</small>
              )}
              <div class="tinput-box">
                {/* <input type="submit" class="submitbutton" value="Send Message" /> */}
               <b className="tmessagelogo" ><BasicModal  open={open} close={handleClose}/></b>
              </div>
            </form>
          </div>
        </div>
      </div><br/><br/>
    
    </div>
    
  );
}