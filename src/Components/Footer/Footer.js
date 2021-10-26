import React from 'react'
import '../Navbar/Navbar.css'
import { useLocation } from "react-router-dom";
import {BsYoutube,BsInstagram,BsTelegram,BsPinterest,BsTwitter} from 'react-icons/bs';
import {FaFacebookF,FaLinkedinIn,FaTumblr} from 'react-icons/fa';
function Footer() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
             {location.pathname === '/update' ||location.pathname === '/freightform' ||location.pathname === '/freight' || location.pathname === '/pnr'|| location.pathname==='/reserved'|| location.pathname=='/fareseat' ? "":
            <footer>
        <div class="footer-header">
    <h4>Get Connected with us on social networks</h4>
               <div> 
               <i class=" facebook"><FaFacebookF/></i>
        <i class="youtube"><BsYoutube/></i>
        <i class="insta"><BsInstagram/></i>
        <i class="link"><FaLinkedinIn/></i>
        <i class="tele"><BsTelegram/></i>
        <i class="pin"><BsPinterest/></i>
        <i class="tum"><FaTumblr/></i>
        <i class="twitter"><BsTwitter/></i>
    </div>
    </div>

    <div class="footer-footer">
        <div>© Copyright Train Ticket Booking 2022 Site | Terms of Use | Privacy Policy</div>
    </div>
  </footer>}
        </div>
    )
}

export default Footer
