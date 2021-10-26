import  React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PrintBtn from './PrintButton';
import { useHistory } from 'react-router';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const history = useHistory()
  return (
    <div>
      <button className="divsbtn">Pay Now</button>
      <Modal
        open={props.open}
        onClose={()=>props.close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
        
            <PrintBtn data={props.data} amount={props.amount}/>
            <center><button className="divsbtn" onClick={()=>history.push('/home') }>Ok</button></center>
            {/* <center><button className="divsok" >Ok</button></center>  */}
           
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


