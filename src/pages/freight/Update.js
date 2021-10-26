import React, { useState } from 'react'
//import './Freightform.css'
import { useHistory, useLocation } from "react-router-dom";
import axios from 'axios';
import BasicModal1 from './modalbtn';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";

function Update(props) {
    const history = useHistory();
    console.log(props)
    const Token = () => localStorage.getItem("user");

    const location = useLocation();
    const [sopen,setsOpen]=useState(false);
    const handleClose = () => setsOpen(false);

    const add=(e)=>{var d=new Date(e)
        d.setDate(d.getDate()+2);
        setsArrival(d)}


    const sf = location.state.sfid;
    console.log(sf)
    const [sfname, setsFname] = useState(location.state.sfn);

    const [sftype, setsFtype] = useState(location.state.sft)

    const [sfrom, setsFromplace] = useState(location.state.sfrom)

    const [sto, setsToplace] = useState(location.state.sto)

    const [sdeparture, setsDeparture] = useState(location.state.sdep)

    const [sarrival, setsArrival] = useState(location.state.sarrival)



    const supdateData = (e) => {
        e.preventDefault()
        try {
            axios.patch("http://localhost:7000/Freight/updatefreight",
            { sfid:sf,sfname:sfname, sftype:sftype,sdeparture:sdeparture, sarrival:sarrival,sfrom:sfrom, sto:sto },{
                headers:{authorization:`Bearer ${Token()}`}
               }
            )
        }
        catch (error) {
            console.log(error)
        }
    setsOpen(true);
    }


    return (
        <div>
            <div>
                <body className="sanbodypart">
                    <form className="sanformpart" >
                        <div>
                            <h1 className="sanheadingtxt">Update Your Freight Details</h1>
                        </div>
                        <div className="sanfs">
                            <div className="sanlin">
                                <label className="sanlabel1" for="sfname">Freight Name</label>
                                <input className="sanin sanselect1" name="fname" value={sfname} type="text" id="sfname" placeholder="Freight Name" onChange={(e) => {
                                    setsFname(e.target.value)

                                }

                                } />

                            </div>
                            <div className="sanlin"><label className="sanlabel1" for="sftype">Type of Freight</label>

                                <select className="sanin sanselect1" name="sftype" value={sftype} id="sftype" onChange={(e) => {
                                    setsFtype(e.target.value)

                                }

                                }>
                                    <option>Select</option>
                                    <option value="Liquid-Volatile">Liquid-Volatile</option>
                                    <option value="Liquid-Non-Volatile">Liquid-Non-Volatile</option>
                                    <option value="Solid-Volatile">Solid-Volatile</option>
                                    <option value="Solid-Non-Volatile">Solid-Non-Volatile</option>
                                    <option value="Gas-Volatile">Gas-Volatile</option>
                                    <option value="Gas-Non-Volatile">Gas-Non-Volatile</option>
                                </select>

                            </div>
                            <div className="sanlin"><label className="sanlabel1" for="sfrom">From</label>

                                <select className="sanin sanselect1" name="sfrom" value={sfrom} id="sfrom" onChange={(e) => {
                                    setsFromplace(e.target.value)

                                }

                                }>
                                    <option className="sanselect1">Select</option>
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

                            </div>
                            <div className="sanlin"><label className="sanlabel1" for="sto">To</label>

                                <select className="sanin sanselect1" name="sto" value={sto} id="sto" onChange={(e) => {
                                    setsToplace(e.target.value)

                                }

                                }>
                                    <option className="sanselect1">Select</option>
                                    <option>NEW DELHI - NDLS</option>
                                    <option>MGR CHENNAI CTL - MAS</option>
                                    <option>HOWRAH JN - HWH</option>
                                    <option>SECUNDERABAD JN - SC</option>
                                    <option>PUNE JN - PUNE</option>
                                    <option>CHENNAI EGOMRE - MS</option>
                                    <option>MUMBAI CENTRAL - MMCT</option>
                                    <option>DELHI - DLI</option>
                                    <option>MADURAI JN - MDU</option>
                                    <option>TIRUCHCHIRAPALI - TPJ</option>
                                </select>

                            </div>
                            <div className="sanlin"><label className="sanlabel1" for="sdeparture">Departure</label>
                            <DatePicker selected={sdeparture } className="sanin sanselect1 sandep" value={sdeparture} id="sdeparture" onChange={(e) =>   
{setsDeparture(e)
    add(e)}}/> 
                            
                        </div>
                            <div className="sanlin"><label className="sanlabel1" for="sarrival">Arrival</label>
                                <input
                                type="text"
                                    className="sanin sanselect1"
                                    name="sarrival" value={sarrival} id="sarrival" disabled>
                                    
                                </input>

                            </div>
                            <div className="sansubmit"><button type="reset" className="sanbtncolor sanuppercase">Reset</button>
                                <BasicModal1 sopen={sopen} close={handleClose} funcup={(e) => supdateData(e)}/>
                                
                                <button type="button" className="sanbtncolor sanuppercase" onClick={() => history.push("/freight")}>Cancel
                                </button>
                            </div>
                        </div>
                    </form>
                </body>
            </div>
        </div>
    )
}

export default Update