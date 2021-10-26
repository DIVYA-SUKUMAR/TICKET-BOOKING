import React from 'react'
import './Freight.css'

import d from '../../assets/OIP.jpg';
import e from '../../assets/owntrml1.jpg';
import Excellent1 from '../../assets/innovate2.jpg';
import Excellent2 from '../../assets/ownwgon1.jpg';
import Excellent3 from '../../assets/professional.jpg';
import Excellent4 from '../../assets/R.jpg';
import g from '../../assets/timetable1.jpg';
import h from '../../assets/TrmlSearch.jpg';
import i from '../../assets/tracktrace.jpg';
import { FaRegHandPointDown,FaFacebookF,FaInstagram,FaPinterest,FaTelegram,FaTwitterSquare } from 'react-icons/fa';

import {Link, useHistory} from "react-router-dom";


function Freight() {
    const history = useHistory();
    
    return (
        <div>
        
            <body>
    <section className="sanbackground">
        <div className="sanheader_menu">
            <h1>RAILWAYS FREIGHT BUSINESS PORTAL</h1>
            <nav className="sannavbar_header">
                <Link className="sannavbar_menu sansmnav sananc" to='/home'>Home</Link>
                <a className="sannavbar_menu sansmnav sananc" href="#sans2b">Commodities</a>
                <a className="sannavbar_menu sansmnav sananc" href="#sanservices">Services</a>
                <a className="sannavbar_menu sansmnav sananc" href="#sans2aboutus">About Us</a>
                <Link className="sannavbar_menu sansmnav sananc" to='/contact'>Contact</Link>
            </nav>
        </div>
        <div className="sans1_header">
            <div className="sans1_border">
                <h1>Welcome to Indian Railways Freight Services</h1>
                <h2>Transforming Supply Chain with Technology and Innovations..</h2>
            </div>
            <div className="sanbn">
                {/* <Router> to={{ pathname:'/freightform'}}*/ }
                {/* <Link > */}
                <button className="sanbooknow" onClick= {()=>history.push("/freightform")}>
                    <span className="sanfaicon">&#128642; Book Now</span>
                    </button>
                
                {/* </Link> */}
                {/* <Route path="/freightform" component={Freightform}></Route></Router> */}
                </div>
        </div>

        <div>
            <a href="#sans2" className="sanfa_arrow"><button>
                    <span className="sanfaicon"><FaRegHandPointDown/></span>
                </button>
            </a>
        </div>

    </section>
    <section id="sans2" className="sansection2">
        <div className="sando">
            <h1>Do What You Want</h1>
        </div>
        <div className="sanmenu_link">
            <div className="sanmenu sanimgradius">
                <a>
                    <img src={h} alt="Terminal Search" />

                    <div className="sanmenu_desc">
                        <h1>CHOOSE TERMINAL</h1>
                        <p>Select the best terminal for you</p>
                    </div>
                </a>
            </div>
            <div className="sanmenu sanimgradius">
                <a>
                    <img src={d} alt="Select wagon" />

                    <div className="sanmenu_desc">
                        <h1>SELECT WAGON</h1>
                        <p>Select the best Wagon for you</p>

                    </div>
                </a>
            </div>
            <div className="sanmenu sanimgradius">
                <a>
                    <img src={Excellent4} alt="Get freight" />

                    <div className="sanmenu_desc">
                        <h1>GET FREIGHT & EXPECTED TRANSIT TIME</h1>
                        <p>Guaranteed delivery</p>

                    </div>
                </a>
            </div>
        </div>
        <div id="sans2aboutus" className="sans2a">
            <h1>About Us</h1>
            <p className="sans2app">Indian Railways is the backbone of the country's logistics sector. We carry more than 1.2
                Billon tonnes
                of freight traffic every year over a network of 68000 kms. With our network touching almost every nook
                and corner of the country, we play a crucial role in facilitating a balanced and inclusive socio
                economic development of the country. We carry almost all commodities including bulk commodities like
                Coal, Iron ore, Iron & Steel, Food grains, Cement, Petroleum products, Fertilizer and other commodities
                carried in containers. We are proud to serve more than 9,000 customers. We are the most environment
                friendly mode of land transportation.
                Our commitment is competitive rates and timely delivery of cargo.</p>
        </div>
        <div id="sans2b" className="sannums">
            <div className="sannum"><a href="#" className="sananc">
                    <div className="sannum1">
                        <div>
                            <h1>10000</h1><b>Wagons</b>
                        </div>
                    </div>
                </a>
                <a href="#" className="sananc">
                    <div className="sannum1">
                        <div>
                            <h1>20000</h1><b>Locomotives</b>
                        </div>
                    </div></a>
            </div>
            <div className="sannum">
                <a href="#" className="sananc">
                    <div className="sannum1">
                        <h1>650</h1><b>Commodities</b>
                    </div>
                </a>
            </div>
            <div className="sannum"><a href="#" className="sananc">
                    <div className="sannum1">
                        <h1>2943</h1><b>Indents a day</b>
                    </div>
                </a>
                <a href="#" className="sananc">
                    <div className="sannum1">
                        <h1>1374</h1><b>e-Payment Customers</b>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <section id="sanservices" className="sans3services">
        <div className="sans3h">
            <h1>Services</h1>
        </div>
        <div className="sans3flex">
            <div className="sanmartab">
                <a>
                    <div><img src={i} alt="Track And Trace" />
                        <div className="sans3flexheader">
                            <h1><b>Track And Trace</b></h1>
                            <p>Scheduled movement of your cargo over Indian Railways network
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="sanmartab">
                <a><img src={Excellent1} alt="Incentive Schemes" />
                    <div className="sans3flexheader">
                        <h1><b>Incentive Schemes</b></h1>
                        <p>Customer-centric Incentive Schemes to facilitate your logistics requirements</p>
                    </div>
                </a>
            </div>
            <div className="sanmartab">
                <a><img src={Excellent3} alt="Professional Support" />
                    <div className="sans3flexheader">
                        <h1><b>Professional Support</b></h1>
                        <p>Scheduled movement of your cargo over Indian Railways network</p>
                    </div>
                </a>
            </div>
        </div>
        <div className="sans3flex">
            <div className="sanmartab">
                <a><img src={e} alt="Own A Terminal" />
                    <div className="sans3flexheader">
                        <h1>Own A Terminal</h1>
                        <p>Live track and monitor the movement of your cargo over GIS</p>
                    </div>
                </a>
            </div>
            <div className="sanmartab">
                <a><img src={Excellent2} alt="Own A Wagon" />
                    <div className="sans3flexheader">
                        <h1>Own A Wagon</h1>
                        <p>Connect to Indian Railway Officials for all your concerns</p>
                    </div>
                </a>
            </div>
            <div className="sanmartab">
                <a><img src={g} alt="Timetabled Movement" />
                    <div className="sans3flexheader">
                        <h1>Timetabled Movement</h1>
                        <p>Connect to Indian Railway Officials for all your concerns</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</body>

<footer>
    <div id="sans2contact" className="sanf-header">

        <div>
            <h4 className="sanf-h">Get Connected with us on social networks</h4>
        </div>

        <div className="sanfooter_icons">
            <i className="sanfaicon sanfa-facebook sanf"><FaFacebookF/></i>
            <i className="sanfaicon sanfa-instagram sani"><FaInstagram/></i>
            <i className="sanfaicon sanfa-pinterest sanp"><FaPinterest/></i>
            <i className="sanfaicon sanfa-telegram sant"><FaTelegram/></i>
            <i className="sanfaicon sanfa-tumblr sant"><FaTwitterSquare/></i>
        </div>
    </div>

    <div className="sanf-footer">
© Copyright Train Ticket Booking 2022 Site | Terms of Use | Privacy Policy
    </div>
</footer>
        </div>
      
    )
}

export default Freight
