import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiFillWarning} from 'react-icons/ai';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #012443 10px',
  boxShadow: 24,
  p: 4,
  
};

export default function BasicModal(props) {
  console.log(props);


  return (
    <div>
      <Button  type="submit" class="sub">GO</Button>
      <Modal
        open={props.open}
        onClose={()=>props.close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <marquee><h1 style={{color:'#012443'}}> TRAIN DETAILS </h1></marquee>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
{props.data?<div className="modscon">

           

<p className="pf">Train No: <span className="modsdata">{props.data.trainno}</span></p>

<p className="pf">Train Name:<span className="modsdata">{props.data.trainname}</span></p>

<p className="pf">Source:<span className="modsdata">{props.data.source}</span></p>
<p className="pf">Destination:<span className="modsdata">{props.data.destination}</span></p>
<p className="pf">Arrival Date:<span className="modsdata">{props.data.arrivaldate}</span></p>
<p className="pf">Departure Date:<span className="modsdata">{props.data.departuredate}</span></p>
<p className="pf">Quota:<span className="modsdata">{props.data.quota}</span></p>
<p className="pf">Journeyclass:<span className="modsdata">{props.data.journeyclass}</span></p>


 </div>:<h2 class="nodata"><AiFillWarning/><p>No Trains Available.Kindly Check For Any Other Dates.</p></h2>}


           
    
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
