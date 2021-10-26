import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'
import "./Navbar.css";
function Navbar() {;
  let location = useLocation();
  console.log(location);
  
  return (
    <div>
      {location.pathname === '/update' ||location.pathname === '/freightform' ||location.pathname === '/freight' || location.pathname === '/pnr' || location.pathname==='/reserved'|| location.pathname==='/fareseat'? "":
       <nav>
        <input type="checkbox" id="check"/>
        <label for="check" class='checkbtn'> 
            <AiOutlineMenu/>
        </label>
     <label class="logo">Train Ticket Booking</label>
     <ul>
         
{location.pathname === '/'||location.pathname==="/contact"? <>
<li><Link to="/contact" className={location.pathname==="/contact" ? "active" :""}>contact us</Link></li>
<li><Link to="/Register" className={location.pathname==="/" ? "active" :""}>Sign up</Link></li>
</>:<>{location.pathname === "/Register"||location.pathname==="/contact"?
<>
<li><Link to="/contact" className={location.pathname==="/contact" ? "active" :""}>contact us</Link></li>
<li><Link to="/" className={location.pathname==="/Register" ? "active" :""}>Sign in</Link></li></>:<></>}
</>}
{location.pathname === "/passenger"||location.pathname === "/payment"||location.pathname === "/avail"||location.pathname === "/home" || location.pathname === "/pnr" ?
<>
<li><Link to="/home" className={location.pathname==="/home" ? "active" :""}>home</Link></li>
         <li><Link to="/freight" className={location.pathname==="/freight" ? "active" :""}>Freight Business Portal</Link></li>
        
         <li><Link to="/pnr" className={location.pathname==="/pnr" ? "active" :""}>PNR status</Link></li>     
</>:<></>
}
 
         
         
         
     </ul>
    </nav>
}
    </div>
     
    
  );
}

export default Navbar;