import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
 import './Details.css';
import { useForm } from "react-hook-form";
import axios from 'axios';


import {Link} from 'react-router-dom';
import { Button } from '@mui/material';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const[Register,setRegister] = React.useState({})
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) =>{
  axios.post("http://localhost:7000/User/addusers",data).then((res)=>{
    console.log(res.data)
  })
  console.log(data);
  }
 
  // const onSubmit = data => console.log(data);

  const [value, setValue] = React.useState(0);

console.log(value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   const onSubmit = (data) =>
//   {
//     if (value === 0) {
//     setValue(1)
//   }
// else{
//   setValue(2)
// }
// };
  return (
    <section class ="jmain">
    <div class="register">
        <div class="jcontainer">
            <div class="topic">
                <p>Create Your Account</p>
                <Link to='/'> <b>SIGN IN</b></Link>
            </div>
           
           
            
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider',color :"black"}}  >
        <Tabs value={value} onChange={handleChange} sx={{color:"black"}}  >
          <Tab className="form-btn" label="Basic Details"   {...a11yProps(0)} />
          <Tab  className="form-btn" label="Personal Details"  {...a11yProps(1)} />
          <Tab  className="form-btn" label="Address Details" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TabPanel value={value} index={0}>
      
      <div className="form" id="basicdetail" style={{transform:"translateX(300px)"}}>
                <input type="text" name="username" placeholder="Username" id="username" {...register("username", {required: '*Enter the username' })} />
                {errors.username && (<small className="text-danger">{errors.username.message}</small>)}
                <input type="password" name="password" placeholder="Password" id="password" {...register("password", {required: '*Enter the password' })} />
                {errors.username && (<small className="text-danger">{errors.username.message}</small>)}
                <input type="password" name="cpassword" placeholder="Confirm Password" id="confirmpass" {...register("cpassword", {required: '*Enter the confirmpassword' })} />
                {errors.username && (<small className="text-danger">{errors.username.message}</small>)}
                <select id="cars" name="cars" placeholder="Security Question">
                    <option value="1">What is your pet name?</option>
                    <option value="2">What is your fathers middle name?</option>
                    <option value="3">What make was your first car or bike?</option>
                    <option value="4">What is your favorite food?</option>
                </select>
                <input type="password" name="securityanswer" placeholder="Security Answer" {...register("securityanswer", {required: '*Enter the Securitypassword' })} />
                {errors.securityanswer && (<small className="text-danger">{errors.securityanswer.message}</small>)}
                <div class="action-btns">
                    {/* <input type="submit" value ="Cancel" />
                    <input type="submit" value ="Continue" /> */}
                    {/* <button type="submit" onSubmit={handleChange}>Continue </button> */}
                </div>
            </div>
         
      </TabPanel>
      <TabPanel value={value} index={1}>
      
      <div className="form" id="personaldetail" >
    <input type="text" name="name" placeholder="Name" {...register("name", {required: '*Enter the Name' })} />
    {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
    <input type="date" name="DOB" placeholder="Date Of Birth" {...register("DOB", {required: '**Enter the DOB' })} />
    {errors.DOB && (<small className="text-danger">{errors.DOB.message}</small>)}

    <div class="action-radio">
        <input type="radio" name="Gender" id="male" /> <label for="male">Male</label>
        <input type="radio" name="Gender" id="female" /> <label for="female">Female</label>
        <input type="radio" name="Gender" id="transgender" /> <label for="transgender">Transgender</label>
    </div>


    <input type="text" name="Email" placeholder="Email" {...register("Email", {required: '*Enter the Email' })} />
    {errors.Email && (<small className="text-danger">{errors.Email.message}</small>)}
    <input type="text" name="mobile" placeholder="Mobile No" {...register("mobile", {required: '*Enter the Mobile' })} />
    {errors.mobile && (<small className="text-danger">{errors.mobile.message}</small>)}

    <div class="action-btns">
        {/* <button type="submit" onClick={()=>setValue(0)}>Back </button> */}
        {/* <button type="submit" >Continue </button> */}
    </div>
    </div>
 
      </TabPanel>
      <TabPanel value={value} index={2}>
   
      <div className="form" id="address" >
    <input type="text" name="doorno" placeholder="Flat/Door No" {...register("doorno", {required: '*Enter the Flat/Door no' })} />
    {errors.doorno && (<small className="text-danger">{errors.doorno.message}</small>)}
    <input type="text" name="street" placeholder="Street/Lane" {...register("street", {required: '*Enter the Street/Lane' })} />
    {errors.street && (<small className="text-danger">{errors.street.message}</small>)}
    <input type="text" name="Pin" placeholder="PinCode" {...register("Pin", {required: '*Enter the Pincode' })} />
    {errors.Pin && (<small className="text-danger">{errors.Pin.message}</small>)}
    <input type="text" name="City" placeholder="City" {...register("City", {required: '*Enter the City' })} />
    {errors.City && (<small className="text-danger">{errors.City.message}</small>)}
    <input type="text" name="State" placeholder="State" {...register("State", {required: '*Enter the State' })} />
    {errors.State && (<small className="text-danger">{errors.State.message}</small>)}
  

    <div class="action-btns">
        {/* <button type="submit" onClick={()=>setValue(1)} >Back </button> */}

        <Button type="submit">Register</Button>
        {/* <button type="submit">Register</button> */}
    </div>
    </div>
   
      </TabPanel>
      </form>
    </Box>
    </div>
            </div>
   </section>
  );
}
