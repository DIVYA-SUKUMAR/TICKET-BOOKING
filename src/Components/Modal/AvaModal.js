import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: ' white',
  borderRadius:'10px',
//   border: '3px solid #012443',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
 

  return (
    <div>
      <button onClick={props.openm}>Details</button>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
             <div className="modal">TRAIN DETAILS</div>
             <div>SOURCE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.from}</div>
             <div>DESTINATION:&nbsp;&nbsp;&nbsp;&nbsp;{props.to}</div>
             <div>DATE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.date}</div>
             <div>GENERAL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.general}</div>
             <div>CLASS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.classes}</div>
           <center>  <button className='butbut' onClick={props.close}>Back</button></center>
         </Box>
      </Modal>
    </div>
  );
}
