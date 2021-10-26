import React, { useEffect, useState } from 'react'
import '../Components/Navbar/Navbar.css'
import img1 from '../assets/download (9).jpg';
import img2 from '../assets/images (5).jpg';
import img3 from '../assets/images (6).jpg';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import BasicModal from '../Components/Modal/AvaModal';
function Availability(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const {location:{state}} = props;
    console.log("props",state);
    const [show, handleShow] = useState(false);
    const [Train, setTrain] = useState([]);
    const [from, setFrom] = useState(state.from)
const [to, setTo] = useState(state.to)
const [date, setDate] = useState(state.date)
const [classes, setClasses] = useState(state.classes)
const [general, setGeneral] = useState(state.general)
const [errorF, setErrorF] = useState("");
const [errort, setErrort] = useState("");
const [errord, setErrord] = useState("");
const [errorc, setErrorc] = useState("");
const [errorg, setErrorg] = useState("");
  useEffect(() => {
      trains()
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);
  const Token = () => localStorage.getItem("user");
   
    const history = useHistory();
    const trains=()=>{
        axios.post("http://localhost:7000/Train/viewtraindetails",{
from:from,
to:to,
date:date
        }, {
            headers:{authorization:`Bearer ${Token()}`}
           }).then((res)=>{
            console.log(res.data);
       setTrain(res.data)
        })
    }
    console.log(Train);


const validate =(e)=>{
e.preventDefault()
    if (from === "") {
        setErrorF("*Select from Location")
    }
    else{
        setErrorF("")
    }

   if(to === ""){
        setErrort("*Select to Location")
    }
    else if(to===from){

        setErrort("*From place and To place must be different")
  
      }
    else{
        setErrort("")
    }

 if(date === ""){
        setErrord("*Select date")
    }
    else{
        setErrord("")
    }

  if(classes === ""){
        setErrorc("*Select class")
    }
    else{
        setErrorc("")
    }

   if(general === ""){
        setErrorg("*Select class")
    }
    else{
        setErrorg("")
        trains()
    }
    if(errorF ==="" && errorc==="" && errord==="" && errorg==="" && errort===""){
        trains()
      }

}
const user_id = localStorage.getItem("user_id");
const book=(train_id)=>{
    console.log(train_id);
    axios.post('http://localhost:7000/Booking/booking',{
user_id:user_id,
train_id:train_id,
from:from,to:to,date:date,classes:classes,general:general,amount:0,passengerCount:0,status:"waiting",pnrno:""
    }, {
        headers:{authorization:`Bearer ${Token()}`}
       }).then((res)=>{
        console.log(res.data);
        history.push({pathname:"/passenger",state:{booking_id:res.data,from:from,to:to,date:date,classes:classes,general:general}})
    })
    
}

    return (
        <div>
            <div className={show ?"section-1 active":"section-1"}>
        
        <div class="section-1-part-1">
            <form>
     <ul>
         <li><span class="book_label">FROM</span>
           
              <select class="input_station" value={from} onChange={(e)=>{setFrom(e.target.value)
            setErrorF("")  
            }
            } >
                  <option>NEW DELHI - NDLS</option>
                  <option>MGR CHENNAI CTL - MAS</option>
                  <option>HOWRAH JN - HWH</option>
                  <option>SECUNDERABAD JN - SC</option>
                  <option>PUNE JN - PUNE</option>
                  <option>CHENNAI EGMORE - MS</option>
                  <option>MUMBAI CENTRAL - MMCT</option>
                  <option>DELHI - DLI</option>
                  <option>MADURAI JN - MDU</option>
                  <option>TIRUCHCHIRAPALI - TPJ</option>
              </select>
              <div className='error'>{errorF === "" ?"":errorF}</div>
          </li>
         <li><span class="book_label">TO</span>
            
              <select id="station" value={to} class="input_station" onChange={(e)=>{setTo(e.target.value)
             setErrort("")  
            }}>
                  <option>NEW DELHI - NDLS</option>
                  <option>MGR CHENNAI CTL - MAS</option>
                  <option>HOWRAH JN - HWH</option>
                  <option>SECUNDERABAD JN - SC</option>
                  <option>PUNE JN - PUNE</option>
                  <option>CHENNAI EGMORE - MS</option>
                  <option>MUMBAI CENTRAL - MMCT</option>
                  <option>DELHI - DLI</option>
                  <option>MADURAI JN - MDU</option>
                  <option>TIRUCHCHIRAPALI - TPJ</option>
              </select>
              <div className='error'>{errort === "" ?"":errort}</div>
          </li>
         <li><span class="book_label">DATE</span>
            <input class="input_station" type="date" value={date}  placeholder="&#10148;" onChange={(e)=>{setDate(e.target.value)
             setErrord("")  
            }}/><div className='error'>{errord === "" ?"":errord}</div></li>
            
            <li><span class="book_label">ALL CLASSES</span>
                
                  <select id="station" value={classes} class="input_station" onChange={(e)=>{setClasses(e.target.value)
                 setErrorc("")  
                }}>
                    <option>AC 2 Tier (2A)</option>
                    <option>AC 3 Tier (3A)</option>
                    <option>Sleeper (SL)</option>
                    <option>Ac First Class (FC)</option>
                    <option>Second Sitting (2S))</option>
                  </select>
                  <div className='error'>{errorc === "" ?"":errorc}</div>
              </li>
              <li><span class="book_label">GENERAL</span>
                   <select id="station" value={general} class="input_station" onChange={(e)=>{setGeneral(e.target.value)
                 setErrorg("")  
                }}>
                    <option>GENERAL</option>
                    <option>TATKAL</option>
                    <option>PREMIUM TATKAL</option>
                    <option>LOWER BERTH/SR.CITIZEN</option>
                    <option>DIVYAANG</option>
                    <option>LADIES</option>
                    
                  </select>
                  <div className='error'>{errorg === "" ?"":errorg}</div>
              </li>
              <li><button class="b" onClick={(e)=>validate(e)}>MODIFY SEARCH</button></li>
     </ul>
    </form>
     
    </div>
     <div class="section-1-part-2">
         <div>
     <input  type="checkbox" id="ch-1"/>
     <label  for ="ch-1" class="check-label">Flexible With Date</label>    
    </div>
    <div>
    
      <input  type="checkbox" id="ch-2"/>
     <label  for ="ch-2" class="check-label">Train With Available Berth</label>    
    </div>
     <div>
     <input  type="checkbox" id="ch-3"/>
     <label  for ="ch-3" class="check-label">Divyaang Concession</label>    
    </div>
     <div>
  
     <input  type="checkbox" id="ch-4"/>
     <label  for ="ch-4" class="check-label">Railway Pass Concession</label>    
    </div>
    </div>
    </div>
    <br/>
  
    <div class="section-2">
       
       <div class="section-2-part-1">
        <div>
            <button  class="top-buttons">&#x3c; Previous Day</button>
            <button  class="top-buttons">Next Day &#x3e;</button>
        </div>
           <div>
               <select name="journey-class" id="class-journey">
                   <option selected disabled>JOURNEY CLASS</option>
                   <option>AC 2 TIER (2A)</option>
                   <option>AC 3 TIER (3A)</option>
                   <option>Second Sitting (2S)</option>
                   <option>Sleeper (SL)</option>
               </select>
           </div>
           <div>
            <select name="Train-Type" id="Train-Type">
                <option selected disabled>TRAIN-TYPE</option>
                <option>SPECIAL</option>
                <option>SPECIAL TATKAL</option>
                
            </select>
        </div>
        <div>
            <select name="DEPARTURE TIME" id="DEPARTURE TIME">
                <option selected disabled>DEPARTURE TIME</option>
                <option>EARLY MORNING(0-6)</option>
                <option>MORNING(6-12)</option>
                <option>MID DAY(12-18)</option>
                <option>NIGHT(18-24)</option>
            </select>
        </div>
        <div>
            <select name="journey-class" id="class-journey">
                <option selected disabled>ARRIVAL TIME</option>
                <option>EARLY MORNING(0-6)</option>
                <option>MORNING(6-12)</option>
                <option>MID DAY(12-18)</option>
                <option>NIGHT(18-24)</option>
            </select>
        </div>
        <div>
            <img src={img1} alt=""/>
        </div>
        <div>
            <img src={img2} alt=""/>
        </div>
        <div>
            <img src={img3} alt=""/>
        </div>
        </div>
       <div class="section-2-part-2">
           
       {
       Train.length === 0? <h3>NO TRAINS AVAILABLE</h3> :
       Train.map((e)=>{
                       return(
                        <div>
                 
                        <div><h3>{e.to} EXPRESS</h3>
                     <h4>{e.from}-{e.to}-{e.date}</h4>
                     <div class="class-berth">
                         {e.classes.map((e)=>{
                             return(
                                <div style={{padding:"5px"}}>
                                    {e.class}<br/>
                                    {e.price}
                                    </div>
                             )
                         })}
                     </div>
                     </div>
                     <div class="but">
                        <button onClick={()=>book(e._id)}>Book Now</button>
                     <BasicModal open={open} close={()=>handleClose()} openm={()=>handleOpen()} from={from} to={to} date={date} classes={classes} general={general}/>
                 </div>
                    </div>
                       )
                   })}
     
            
              
           
        </div>
    </div>
        </div>
    )
}

export default Availability
