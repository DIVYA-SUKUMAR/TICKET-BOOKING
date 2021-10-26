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
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #012443 10px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  console.log(props);


  return (
    <div>
      <Button type="submit" class="sub">SUBMIT</Button>
      <Modal
        open={props.open}
        onClose={() => props.close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <marquee><h1 style={{ color: '#012443' }}> PNR STATUS </h1></marquee>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             {props.data?<div className="modscon">
             
         <p className="pf">PNR No<span className="modsdata">{props.data.pnrno}</span></p>
             <p className="pf">No of Passengers:<span className="modsdata">{props.data.passengerCount}</span></p>
           <p className="pf">Amount paid for tickets:<span className="modsdata">{props.data.amount}</span></p>
             <p className="pf">Booking Status:<span className="modsdata">{props.data.status}</span></p>
            <p className="pf">Train No:<span className="modsdata">{props.data.train_id}</span></p>
           <p className="pf">User Id:<span className="modsdata">{props.data.user_id}</span></p>

            </div>:<h2 class="nodata"><AiFillWarning/><p>No Data Found.Please Check your PNR number.</p></h2>
            }
            
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
