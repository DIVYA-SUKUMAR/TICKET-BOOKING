import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {BiMessageCheck} from 'react-icons/bi';
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
  

  return (
    <div>
      <Button  type="submit" class="tsubmitbutton">Send Message </Button>
      <Modal
        open={props.open}
        onClose={()=>props.close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <p class="messagelogo"><BiMessageCheck/></p>
           <p class="textmsg"> MESSAGE SENT SUCCESSFULLY </p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}