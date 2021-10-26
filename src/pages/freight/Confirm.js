import React,{ useEffect, useState } from 'react'
//import './form/Freightform.css'
import axios from 'axios'
import {useHistory} from "react-router-dom";

function Confirm() {
    const history = useHistory();
// state={
// title:'',
// body:'',
// posts:[]
// }
const [ftype, setFtype] = useState("")

    const [fromplace, setFromplace] = useState("")

    const [toplace, setToplace] = useState("")

    const [confirmdeparture, setDeparture] = useState("")

    const [confirmarrival, setArrival] = useState("")

    const [fname, setFname] = useState("")

// componentDidMount=()=>{
//     this.getData();
// }

//     getData=()=>{
//         axios.get('http:/localhost:8080/render').then((response)=>{
//             this.setStatee({posts:data});
//             const data=response.data;
//         console.log("Data displayed");
// })
// .catch(()=>{alert("Error in data");
// })}
    return (
        <div>
            <body className="sanbodypart">
                <form className="sanformpart" >
                    {/* {onSubmit={postData}} onLoad={getData}*/}
                    <div>
                        <h1 className="sanheadingtxt">Check Your Details</h1>
                    </div>
                    <div className="sanfs">
                        <div className="sanlin">
                            <label className="sanlabel1" for="fname">Freight Name</label>
                            <input className="sanin sanselect1" name="fname" value={fname} type="text" id="fname"   />
                            {/* <div className='sanerror'>{errorFn === "" ? "" : errorFn}</div> */}
                            
                        </div>
                        <div className="sanlin"><label className="sanlabel1" for="ftype">Type of Freight</label>

                        <input className="sanin sanselect1" name="ftype" value={ftype} type="text" id="ftype"   />
                            {/* <div className='sanerror'>{errorFt === "" ? "" : errorFt}</div> */}
                        </div>
                        <div className="sanlin"><label className="sanlabel1" for="from">From</label>

                        <input className="sanin sanselect1" name="fromplace" value={fromplace} type="text" id="fromplace"   />
                            {/* <div className='sanerror'>{errorFp === "" ? "" : errorFp}</div> */}
                        </div>
                        <div className="sanlin"><label className="sanlabel1" for="to">To</label>

                        <input className="sanin sanselect1" name="toplace" value={toplace} type="text" id="toplace"   />
                            {/* <div className='sanerror'>{errorTp === "" ? "" : errorTp}</div> */}
                        </div>

                        <div className="sanlin"><label className="sanlabel1" for="departure">Departure</label>
                        <input className="sanin sanselect1" name="confirmdeparture" value={confirmdeparture} type="text" id="confirmdeparture"   />
                            {/* <div className='sanerror'>{errorDe === "" ? "" : errorDe}</div> */}
                        </div>
                        <div className="sanlin"><label className="sanlabel1" for="arrival">Arrival</label>
                        <input className="sanin sanselect1" name="confirmarrival" value={confirmarrival} type="text" id="confirmarrival"   />
                            {/* <div className='sanerror'>{errorAr === "" ? "" : errorAr}</div> */}
                        </div>
                        <div className="sansubmit"><button type="reset" className="sanbtncolor sanuppercase">Reset</button>
                            <button type="submit" className="sanbtncolor sanuppercase" onClick= {()=>history.push("Freightform")}>Book My Freight
                            </button>
                            <button type="button" className="sanbtncolor sanuppercase" onClick= {()=>history.push("Freightform")}>Edit
                            </button>
                        </div>
                        {/* </div> */}
                    </div>
                </form>
            </body>
        </div>
    )
}

export default Confirm
