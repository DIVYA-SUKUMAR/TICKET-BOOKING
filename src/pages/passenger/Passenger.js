
import './Passenger.css';
import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import Recaptcha from 'react-recaptcha';
import { useHistory } from 'react-router-dom';
import { FcCheckmark } from "react-icons/fc";
function Passenger(props) 
{
  const history = useHistory();
  const {location:{state}} = props;
  const [from, setFrom] = useState(state.from)
const [to, setTo] = useState(state.to)
const [date, setDate] = useState(state.date)
const [classes, setClasses] = useState(state.classes)
const [general, setGeneral] = useState(state.general)
  const [adultFields, setAdultFields] = useState([
    {
      id: uuidv4(),
      name: '',
      age: '',
      gender: '',
      berth: '',
      nation: '',
      idtype: '',
      idno: '',
    },
  ]);

  const [childinputFields, setChildinputFields] = useState([
    {
      childid: uuidv4(),
      childname: '',
      childage: '',
      childgender: '',
    },
  ]);
  const[adultverified,setAdultverified]=useState(false);
  const [policy, setPolicy] = useState(false);
  const [phone, setPhone] = useState('');
  const [errorphone, setErrorphone] = useState('');
  const [numberverified,setNumberverified]=useState(false);


  const [captchaverified, setCaptchaverified] = useState(false);
  const verifyCallback = (response) => {
    if (response) {
      setCaptchaverified(!captchaverified);
      console.log('verified');
    }
  };
  const recaptchaLoaded = () => {
    console.log('capcha successfully loaded');
  };

  const handleReset = (e) => {
    e.preventDefault();
    setAdultFields([
      {
        name: '',
        age: '',
        gender: '',
        berth: '',
        nation: '',
        idtype: '',
        idno: '',
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(adultFields);
    setAdultverified(true)
  };

  const handleChangeInput = (id, event) => {
    const newadultFields = adultFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setAdultFields(newadultFields);
  };


  const handleChildChangeInput = (childid, event) => {
    if(adultverified){
      const newChildinputFields = childinputFields.map((i) => {
      if (childid === i.childid) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    setChildinputFields(newChildinputFields);
  }else{alert('Save Adult Passenger details First')}
  };


  const handleAddFields = () => {
    setAdultFields([
      ...adultFields,
      {
        id: uuidv4(),
        name: '',
        age: '',
        gender: '',
        berth: '',
        nation: '',
        idtype: '',
        idno: '',
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...adultFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setAdultFields(values);
  };

  const handleCheckChange = () => {
    setPolicy(!policy);
  };
  
  const handlePhonenumber = (e) => {
    e.preventDefault();
      //const newNumber=numberverified
     if (phone.length == 10 && /\d/.test(phone)) {
      setErrorphone('');
      console.log(phone);
      setNumberverified(true)
    } 
     else {
      setErrorphone('Not a Valid Number');
      console.log(errorphone);
        return false;
    }
  };


  //<-------------------------->


  const handleChildReset = (e) => {
    e.preventDefault();
    setChildinputFields([{ childname: '', childage: '', childgender: '' }]);
  };
  //const [childerror, setChilderror] = useState();
  
  const handleChildSubmit = (e) => {
    e.preventDefault();
    console.log(childinputFields)
  };

  

  const handleChildAddFields = () => {
    setChildinputFields([
      ...childinputFields,
      {
        childid: uuidv4(),
        childname: '',
        childage: '',
        childgender: '',
      },
    ]);
  };

  const handleChildRemoveFields = (id) => {
    const values = [...childinputFields];
    values.splice(
      values.findIndex((value) => value.childid === id),
      1
    );
    setChildinputFields(values);
  };
  const Token = () => localStorage.getItem("user");

  const handleNext = (e) => {
    e.preventDefault();
    if(captchaverified){
     if(numberverified){
       if(adultverified){
         axios.post("http://localhost:7000/passenger/addpassenger",
         {booking_id:state.booking_id,Passengers:adultFields,childinputFields,
          
          policy_Status:policy,
          Phone_Number:phone},  {
            headers:{authorization:`Bearer ${Token()}`}
           }
       ).then((res)=>{console.log(res.data)
            axios.patch("http://localhost:7000/Booking/updateCount",
            {_id:state.booking_id,passengerCount:adultFields.length,
             },  {
              headers:{authorization:`Bearer ${Token()}`}
             }
         ).then((res)=>{
               console.log(res.data);
              history.push({pathname:"/payment",state:{booking_id:state.booking_id,class:classes,Passengers:adultFields.length,}})

             })
                      })
         
       }else{alert('Save Passenger Details')}
     }else{
       alert('Verify Mobile Number')
     }
    }else{
      alert('Captcha not Verified. Verified and try Again')
    }
  };
  return (
    <div>
      <br/>
      <div class="journey">
        <div id="head">Journey Details</div>
        <div class="cont">
          <div id="c1">
            Train No./Name:&nbsp;{to}-EXPRESS <br />
            Journey Date:&nbsp;&nbsp;&nbsp;&nbsp; {date}
            <br />{' '}
          </div>
          <div id="c2">
            From Station:&nbsp; {from}
            <br />
            To Station:&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{to}
            <br />
          </div>
          <div id="c3">
            Class:&nbsp; &nbsp; {classes}
            <br />
            Quota:&nbsp; &nbsp;{general}
          </div>
        </div>
      </div>
      <div id="space"></div>

      <div class="passenger">
        <div id="head">Passenger Details</div>

        <div id="table">
          <form onSubmit={handleSubmit}>
            <table id="tb">
              {/* <table id="tb"> <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Berth Preferences</td>
            <td>Nationality</td>
            <td>ID Card Type</td>
            <td>ID card number</td>
            <td> &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;</td></tr></table> */}
              {adultFields.map((inputField) => (
                <div key={inputField.id}>
                  <tr>
                    <td>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={inputField.name}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      />
                    </td>
                    &nbsp;&nbsp;&nbsp;
                    <td>
                      <input style={{width:'70px'}}
                        required
                        type="text"
                      //  minlength="1"
                        maxlength="2"
                        name="age"
                       
                        placeholder="Age"
                        value={inputField.age}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      />
                    </td>
                    <td>
                      <div>
                        <select
                          required
                          className="dropdowns"
                          name="gender"
                          value={inputField.gender}
                          onChange={(event) =>
                            handleChangeInput(inputField.id, event)
                          }
                        >
                          <option value="" disabled selected hidden>
                            Choose Gender...
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Others</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <select
                        required
                        className="dropdowns"
                        name="berth"
                        value={inputField.berth}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      >
                        <option value="" disabled selected hidden>
                          Choose Preferences
                        </option>
                        <option value="lower">LOWER</option>
                        <option value="upper">UPPER</option>
                        <option value="middle">MIDDLE</option>
                        <option value="no_preference  ">No Preferences</option>
                      </select>
                    </td>
                    {/* <td>
                      <input
                        type="checkbox"
                        defaultChecked={this.state.chkbox}
                        onChange={this.handleChangeChk}
                      /> 
                       <input
                        type="checkbox"
                        name="senior"
                        value={inputField.senior}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      />
                    </td> */}
                    <td>
                      <select
                        required
                        className="dropdowns"
                        name="nation"
                        value={inputField.nation}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      >
                        <option value="" disabled selected hidden>
                          Nationality
                        </option>
                        <option value="indian">INDIAN</option>
                        <option value="others">OTHERS</option>
                      </select>
                    </td>
                    <td>
                      <select
                        required
                        className="dropdowns"
                        name="idtype"
                        value={inputField.idtype}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      >
                        <option value="" disabled selected hidden>
                          Select ID
                        </option>
                        <option value="aadhar">Aadhar Card</option>
                        <option value="voter id">Voter ID</option>
                        <option value="license">License</option>
                      </select>
                    </td>
                    <td>
                      <input
                        required
                        placeholder="ID Number"
                        type="text"
                        name="idno"
                        value={inputField.idno}
                        onChange={(event) =>
                          handleChangeInput(inputField.id, event)
                        }
                      />
                    </td>
                    <td>
                      <IconButton
                        disabled={adultFields.length === 1}
                        onClick={() => handleRemoveFields(inputField.id)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <IconButton onClick={handleAddFields}>
                        <AddIcon />
                      </IconButton>
                    </td>
                  </tr>
                </div>
              ))}
              <center>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  id="reset"
                  // onClick={handleSubmit}
                >
                  Save Details
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  variant="contained"
                  color="primary"
                  type="reset"
                  id="reset"
                  // onSubmit={handleSubmit}
                  onClick={handleReset}
                >
                  Reset Values
                </Button>
                {/* <button id="reset">Reset Passenger Details</button> */}
              </center>
              <br />
            </table>

            <br />
          </form>
        </div>

        {/* </form> */}

        <div id="space"></div>
        <div class="children">
          <div id="head">Children below 5 Yrs</div>
          <div id="table">
            <form onSubmit={handleChildSubmit}>
              <table id="tb">
                {childinputFields.map((childinputField) => (
                  <div className="row" key={childinputField.childid}>
                    <tr>
                      {/* <div style={{ width: '100%', color: 'red' }}>
                        {childerror ? childerror : ''}
                      </div> */}
                      <td>
                        <input
                          required
                          style={{ width: '200px' }}
                          type="text"
                          name="childname"
                          placeholder="Child Name"
                          value={childinputField.childname}
                          onChange={(event) =>
                            handleChildChangeInput(childinputField.childid, event)
                          }
                        />
                      </td>
                      <td>
                        <input
                          required
                          style={{ width: '200px' }}
                          type="number"
                          id="age"
                          min="1"
                          max="5"
                          name="childage"
                          placeholder=" Age"
                          value={childinputField.childage}
                          onChange={(event) =>
                            handleChildChangeInput(childinputField.childid, event)
                          }
                        />
                      </td>
                      <td>
                        <select
                          required
                          style={{ width: '200px' }}
                          className="dropdowns"
                          name="childgender"
                          value={childinputField.childgender}
                          onChange={(event) =>
                            handleChildChangeInput(childinputField.childid, event)
                          }
                        >
                          <option value="" disabled selected hidden>
                            Choose Gender...
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </td>
                      <td>
                        <IconButton
                          disabled={childinputFields.length === 1}
                          onClick={() =>
                            handleChildRemoveFields(childinputField.childid)
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <IconButton onClick={handleChildAddFields}>
                          <AddIcon />
                        </IconButton>
                      </td>
                    </tr>
                  </div>
                ))}
                <center>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    id="reset"
                    // onClick={handleChildSubmit}
                  >
                    Save Details
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    variant="contained"
                    color="primary"
                    type="reset"
                    id="reset"
                    // onSubmit={handleSubmit}
                    onClick={handleChildReset}
                  >
                    Reset Values
                  </Button>
                </center>{' '}
                <br />
              </table>
              <br />
            </form>
          </div>

          <br />
          <div class="travel">
            <div id="head">Travel Insurance</div>
            <div id="trac">
              <p>
                Do you want to take Travel Insurance(Rs 0/person) &nbsp; &nbsp;
                &nbsp;{' '}
                <input
                  type="checkbox"
                  name="policy"
                  value={adultFields.policy}
                  onChange={handleCheckChange}
                  className="checkbox"
                />{' '}
                &nbsp; YES and I Accept the <a href="#">Terms and Condition </a>
                a of the policy
              </p>
            </div>
          </div>
          <br />
          <div class="captacha">
            <div id="head">Captcha and other details</div>
            <div id="capt">
              {/* <p>
                {' '}
                Captcha are case sensitive and to be entered in Upper case only
              </p>
              <img
                id="target"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6x_Ddwr2-TEkJLCukQhcQFe5gBSprdy_Aw&usqp=CAU"
                width="50%"
                height="80px"
                style={{ marginLeft: '6%' }}
              />
              <button id="repbtn">Refresh Captcha</button>
              <br />
              <div>
                <input id="rep-box" required />
              </div> */}
              <center>
                <Recaptcha
                  sitekey="6Ld2TNscAAAAAB7PxN-rCHpUItWBdvTokAYV1f8L"
                  render="explicit"
                  verifyCallback={verifyCallback}
                  onloadCallback={recaptchaLoaded} 
                   />
              </center>
            </div>

            <div id="num">
              <p style={{ fontWeight: 'bold' }}>Mobile Number</p>
            <form onSubmit={handlePhonenumber}> 
           { numberverified? <FcCheckmark size={30} style={{paddingTop:'10px'}}></FcCheckmark>:''}
              
            <input
                type="tel"
                placeholder="+91 "
                maxlength='10'
                pattern="[0-9]{10}"
                id="chknum"
                value={phone}
                onChange={(e) => {
                  setNumberverified(false)
                  setPhone(e.target.value);
                }}
                required
                style={{ width: '30%', height: '25px', padding: '5px' }}
           />

              &nbsp;&nbsp;&nbsp;
              <Button
                  type="submit"
               // onSubmit  ={handlePhonenumber}
                style={{
                  height: '30px',
                  backgroundColor: '#ccc',
                }}
              >
                Verify Mobile Number
              </Button>
              {/* <div style={{ width: '100%', color: 'red' }}>
                {errorphone != '' ? errorphone : ''}
              </div> */}
              </form>
              <br />
            </div>
          </div>
          <br />
          <center>
            {' '}
            <Button
              variant="contained"
              color="primary"
              id="reset"
              onClick={(e)=>handleNext(e)}
            >
              Continue & proceed
            </Button>
          </center>

          <br />
        </div>
      </div>
    </div>
  );
}



export default Passenger;
