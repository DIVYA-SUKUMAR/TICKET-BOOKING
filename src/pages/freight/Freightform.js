import React, { useEffect, useState } from 'react'
import './Freightform.css'
import { useHistory } from "react-router-dom";
import axios from 'axios'
import BasicModal from './confirmmodalpage';
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";

function Freightform() {
    const history = useHistory();
    const [sopen, setsOpen] = useState(false);
    const handleClose = () => setsOpen(false);


    useEffect(() => {
        han();
    }, [])
    const [sfid, setsFID] = useState(0);
    const han = () => {
        const min = 1000;
        const max = 3000;
        const rand = Math.floor(min + Math.random() * (max - min));
        setsFID(rand);
    };
        const [startDate, setStartDate] = useState(new Date());  
        const add=(date)=>{var d=new Date(date)
        d.setDate(d.getDate()+2);
        setsArrival(d)}
const username = localStorage.getItem("username")
    const [sarrival, setsArrival] = useState(new Date())
    const [sftype, setsFtype] = useState("")

    const [sfrom, setsFromplace] = useState("")

    const [sto, setsToplace] = useState("")

    const [sdeparture, setsDeparture] = useState(new Date())

    

    const [sfname, setsFname] = useState("")

    const [serrorFID, setsErrorFID] = useState("");

    const [serrorFt, setsErrorFt] = useState("");

    const [serrorFp, setsErrorFp] = useState("");

    const [serrorTp, setsErrorTp] = useState("");

    const [serrorDe, setsErrorDe] = useState("");

    const [serrorAr, setsErrorAr] = useState("");

    const [serrorFn, setsErrorFn] = useState("");
    const Token = () => localStorage.getItem("user");
  
    const svalidate = (e) => {
        e.preventDefault()

        if (sfid === "") {
            setsErrorFID("*Select Freighttype")
        }
        else {
            setsErrorFID("")
        }
        if (sftype === "") {
            setsErrorFt("*Select Freighttype")
        }
        else {
            setsErrorFt("")
        }
        if (sfrom === "") {
            setsErrorFp("*Select from place")
        }
        else {
            setsErrorFp("")
        }
        if (sto === "") {
            setsErrorTp("*Select to place")
        }
        else {
            setsErrorTp("")
        }
        if (sdeparture === "") {
            setsErrorDe("*Select departure time")
        }
        else {
            setsErrorDe("")
            if (sfrom === sto ) {
                setsErrorTp("*From place and To place must be different")
            } else {
                setsOpen(true)
    
                try {
                    // await axios.post("http://localhost:8080/insertfreight",
                    axios.post("http://localhost:7000/Freight/insertfreight",
                        { username,sfid, sfname, sftype, sdeparture, sarrival, sfrom, sto },  {
                            headers:{authorization:`Bearer ${Token()}`}
                           }
                    )
                        .then((req) => { console.log(req.body.data) })
                    // console.log("")
                    // alert(" Registered successfully")
                }
                catch (error) {
                    console.log(error)
                }
            }
        }
        // if (sarrival === "") {
        //     setsErrorAr("*Select arrival time")
        // }
        // else {
        //     setsErrorAr("")
            
        // }
        
        if (sfname === "") {
            setsErrorFn("*Give Freightname")
        }
        else {
            setsErrorFn("")
        }
    }
    return (
        <div>
            <body className="sanbodypart">
                <form className="sanformpart" >
                    <div>
                        <h1 className="sanheadingtxt">Book Your Freight</h1>
                    </div>
                    <div className="sanfs">
                        {/* <div> */}
                        {/* <!-- <div className="sanlin"><label className="sanlabel" for="id">User ID</label><input className="sanin" type="text" id="id" placeholder="User ID" value=""></div> --> */}
                        {/* <div className="sanlin">
                            <label className="sanlabel1" for="fname">Freight Name</label>
                            <input className="sanin sanselect1" name="fname" type="text" id="fname" placeholder="Freight Name" {...register("fname", {
                                required: 'error message' // JS only: <p>error message</p> TS only support string
                            })} />
                            {errors.fname && (

                                <small className="errorms">{errors.fname.message}</small>

                            )}
                        </div> */}


                        <div className="sanlin">
                            <label className="sanlabel1" for="sfid">Freight ID</label>
                            <input className="sanin sanselect1" name="sfid" value={sfid} type="text" id="sfid" />

                        </div>
                        <div className="sanlin">
                            <label className="sanlabel1" for="sfname">Freight Name</label>
                            <input className="sanin sanselect1" name="sfname" value={sfname} type="text" id="sfname" placeholder="Freight Name" onChange={(e) => {
                                setsFname(e.target.value)

                                setsErrorFn("")

                            }

                            } />

                        </div><div className='sanerror'>{serrorFn === "" ? "" : serrorFn}</div>
                        <div className="sanlin"><label className="sanlabel1" for="sftype">Type of Freight</label>

                            <select className="sanin sanselect1" name="sftype" value={sftype} id="sftype" onChange={(e) => {
                                setsFtype(e.target.value)

                                setsErrorFt("")

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
                            
                        </div><div className='sanerror'>{serrorFt === "" ? "" : serrorFt}</div>
                        <div className="sanlin"><label className="sanlabel1" for="sfrom">From</label>

                            <select className="sanin sanselect1" name="sfrom" value={sfrom} id="sfrom" onChange={(e) => {
                                setsFromplace(e.target.value)

                                setsErrorFp("")

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
                            
                        </div><div className='sanerror'>{serrorFp === "" ? "" : serrorFp}</div>
                        <div className="sanlin"><label className="sanlabel1" for="sto">To</label>

                            <select className="sanin sanselect1" name="sto" value={sto} id="sto" onChange={(e) => {
                                setsToplace(e.target.value)

                                setsErrorTp("")

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
                            
                        </div><div className='sanerror'>{serrorTp === "" ? "" : serrorTp}</div>
                            <div className="sanlin"><label className="sanlabel1" for="sdeparture">Departure</label>
                        <DatePicker selected={startDate } className="sanin sanselect1 sandep" value={sdeparture} onChange={(date) =>   
{setStartDate(date)
setsDeparture(date)
add(date)}} /> 
                            <div className='sanerror'>{serrorDe === "" ? "" : serrorDe}</div>
                        </div>
                        <div className="sansubmit"><button type="reset" className="sanbtncolor sanuppercase">Reset</button>

                            <BasicModal sfid={sfid} sfn={sfname} sft={sftype} sfrom={sfrom} sto={sto} sarrival={sarrival} sdep={sdeparture} func={(e) => svalidate(e)} sopen={sopen} close={handleClose} />

                            <button type="button" className="sanbtncolor sanuppercase" onClick={() => history.goBack()}>Back
                            </button>
                        </div>
                    </div>
                </form>
            </body>
        </div>
    )
}

export default Freightform
