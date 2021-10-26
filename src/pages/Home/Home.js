import React,{ useEffect, useState } from 'react'
import image1 from '../../assets/catering.png'
import image2 from '../../assets/tourist.png'
import image3 from '../../assets/flight.png'
import image4 from '../../assets/gallery.png'
import image5 from '../../assets/bus.png'
import image6 from '../../assets/hotel.png'
import image7 from '../../assets/royal.jpg'
import image8 from '../../assets/inter.jpg'
import image9 from '../../assets/dom.jpg'
import image10 from '../../assets/tour.jpg'
import image11 from '../../assets/temple.jpg'
import image12 from '../../assets/hill.jpg'
 import './Home.css'
import {useHistory} from "react-router-dom";
function Home() {
  const history = useHistory();
  const [from, setFrom] = useState("")
const [to, setTo] = useState("")
const [date, setDate] = useState("")
const [classes, setClasses] = useState("")
const [general, setGeneral] = useState("")
const [errorF, setErrorF] = useState(false);
const [errort, setErrort] = useState(false);
const [errord, setErrord] = useState(false);
const [errorc, setErrorc] =useState(false);
const [errorg, setErrorg] =useState(false);

const validate =(e)=>{
e.preventDefault()

  if (from === "") {
        setErrorF("*Select from location")
    }
    else{
        setErrorF("")
    }

   if(to === ""){
        setErrort("*Select to location")
    }
    else if(to===from){

      setErrort("*From place and To place must be different")

    }
    else{
        setErrort('')
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
        setErrorg("*Select general")
    }
    else{
        setErrorg("")
    }
   

if(errorF ==="" && errorc==="" && errord==="" && errorg==="" && errort===""){
    history.push({pathname:"/avail",state:{from:from,to:to,date:date,classes:classes,general:general}})
    
  }

}
    return (
        <div>
            
    <section className="book_section" >
 <div className="booking_container">
 <div className="title">BOOK TICKET</div><br/><br/>
 <div className="content">
 <form >
 <div className="book">
         <div className="booking">
           <span className="book_label">FROM</span>
           <select className="input_station" onChange={(e)=>{setFrom(e.target.value)
            setErrorF("")  
            }
            }>
                 <option >--Select Location--</option>
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
         </div>
         <div className="booking">
           <span className="book_label">DATE</span>
           <input  className="input_station" type="DATE" onChange={(e)=>{setDate(e.target.value)
             setErrord("")  
            }} /><div className='error'>{errord === "" ?"":errord}</div>
 
         </div>
         <div className="booking">
           <span className="book_label">TO</span>
           <select className="input_station" onChange={(e)=>{setTo(e.target.value)
             setErrort("")  
            }} >
  
  <option>--Select Location--</option>
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
         </div>
         <div className="booking">
           <span className="book_label">ALL CLASSES</span>
           <select className="input_station" onChange={(e)=>{setClasses(e.target.value)
                 setErrorc("")  
                }}>
 
             
 <option>--Select Class--</option>
 <option value="2070">AC 2 Tier (2A)</option>
                    <option >AC 3 Tier (3A)</option>
                    <option>Sleeper (SL)</option>
                    <option>Ac First Class (FC)</option>
                    <option>Second Sitting (2S))</option>
             </select>
             <div className='error'>{errorc === "" ?"":errorc}</div>
         </div>
         <div className="booking">
           <span className="book_label">GENERAL</span>
           <select className="input_station" onChange={(e)=>{setGeneral(e.target.value)
                 setErrorg("")  
                }}>
  
  <option>--Select General--</option>
                 <option>GENERAL</option>
                 <option>TATKAL</option>
                 <option>PREMIUM TATKAL</option>
                 <option>LOWER BERTH/SR.CITIZEN</option>
                 <option>DIVYAANG</option>
                 <option>LADIES</option>
                 
             </select>
             <div className='error'>{errorg === "" ?"":errorg}</div>
         </div>
     </div>
         <div className="check">
           <div>
             <input type="checkbox"   />&nbsp;
             <span className="concession">Railway Pass Concession</span>
         </div> 
         <div>
             <input className="concession_box" type="checkbox" />&nbsp;
             <span className="concession" >Flexible with Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
         </div> 
         </div>
        <div className="check1">
           <div> 
             &nbsp;&nbsp;<input className="concession_box1"  type="checkbox" />&nbsp;
             <span className="concession">Train With Available Berth</span>
           </div> 
           <div>
            &nbsp;&nbsp; <input type="checkbox" />&nbsp;
             <span className="concession">Divyaang Concession</span>
          </div>
         </div>
            <br/><br/>
         <div className="button">
          
             <button class="button1" onClick={(e)=>validate(e)}>SEARCH</button>
           </div>
     </form>
     </div>
     </div>
 </section>
 <section className="services">
   <h1 className="services_title">OUR SERVICES</h1><br/><br/>
   <div className="service_container">
     <div className="our_services">
           <img src={image1} width="50%" />
           <h3 className="service_name">E-CATERING</h3>
     </div>
     <div className="our_services">
       <img src={image2} width="50%" />
       <h3 className="service_name">TOURIST TRAIN</h3>
     </div>
     <div className="our_services">
       <img src={image3} width="50%" />
       <h3 className="service_name">FLIGHT</h3>
     </div>
   </div>
     <div className="service_container">
     <div className="our_services">
        <img src={image4} width="50%" />
         <h3 className="service_name">GALLERY</h3>
     </div>
     <div className="our_services">
       <img src={image5} width="50%" />
       <h3 className="service_name">BUS</h3>
     </div>
     <div className="our_services">
       <img src={image6} width="50%" />
       <h3 className="service_name">HOTEL</h3>
     </div>
   </div>
</section>
<br/><br/>
<section className="holiday_packages">
       <h1 className="holiday_title">HOLIDAY</h1><br /><br />
       <div className="packages_container">
         <div className="packages">
             <img src={image7} width="310px" height="200px" alt="will update soon" />
             <h3 className="holiday_name">ROYAL TRAIN</h3>
             <p className="holiday_details">Best deals in royal train packages,
                handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China,
                Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages 
                are inclusive of sightseeing, meals, visa charges and overseas medical 
               insurance to give you hassle-free and memorable experience.</p>
             <a href="#" className="pack"> &#8921;MORE DETAILS&#8920;</a>
         </div>
   <div className="packages">
         <img src={image8} width="310px" height="200px" alt="will update soon" />
         <h3  className="holiday_name">INTERNATIONAL PACKAGES</h3>
         <p className="holiday_details">Best deals in International packages,
           handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China,
           Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages 
           are inclusive of sightseeing, meals, visa charges and overseas medical 
           insurance to give you hassle-free and memorable experience.</p>
           <a href="#" className="pack"> &#8921;MORE DETAILS&#8920;</a>
   </div>
   <div className="packages">
         <img src={image9} width="310px" height="200px" alt="will update soon" /> 
         <h3  className="holiday_name">DOMESTIC PACKAGES</h3>
         <p className="holiday_details">Best deals in Domestic  packages,
           handpicked by IRCTC,for Tamilnadu, Kerala, Goa,
           Punjab etc.The packages are inclusive of sightseeing, meals, visa charges,medical 
           insurance to give you a hassle-free and memorable experience.</p><br/><br/>
         <a href="#" className="pack"> &#8921;MORE DETAILS&#8920;</a>
   </div>
 </div>
<div className="packages_container">
   <div className="packages">
       <img src={image10} width="310px" height="200px" alt="will update soon" / >
       <h3  className="holiday_name">RAIL TOUR</h3>
       <p className="holiday_details">Best deals in Rail Tour packages,
        handpicked by IRCTC,for Tamilnadu, Kerala, Goa,
        Punjab etc.The packages are inclusive of sightseeing, meals, visa charges,medical 
        insurance to give you a hassle-free and memorable experience.</p><br/><br/>
        <a href="#" className="pack"> &#8921;MORE DETAILS&#8920;</a>
    </div>
    <div className="packages">
       <img src={image11} width="310px" height="200px" alt="will update soon" />
       <h3  className="holiday_name">TEMPLE TOUR</h3>
       <p className="holiday_details">Best deals in Temple Tour packages,
       handpicked by IRCTC,for Tamilnadu, Kerala, Goa,
       Punjab etc.The packages are inclusive of sightseeing, meals, visa charges,medical 
       insurance to give you a hassle-free and memorable experience.</p><br/><br/>
       <a href="#" className="pack"> &#8921;MORE DETAILS&#8920;</a>
    </div>
    <div className="packages">
       <img src={image12} width="310px" height="200px" alt="will update soon" /> 
       <h3  className="holiday_name">HILL STATION TOUR</h3>
       <p className="holiday_details">Best deals in Hill Station Tour packages,
       handpicked by IRCTC,for Tamilnadu, Kerala, Goa,
       Punjab etc.The packages are inclusive of sightseeing, meals, visa charges, 
       insurance to give you a hassle-free and memorable experience.</p><br/>
       <a href="#" className="pack"> &#8921;MORE DETAILS&#8920;</a>
    </div>
</div>
<br/>
</section>
 
        </div>
    )
}

export default Home
