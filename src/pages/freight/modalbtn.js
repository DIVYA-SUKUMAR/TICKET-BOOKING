import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useHistory} from 'react-router-dom';
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

export default function BasicModal1(props) {
  const history = useHistory();
console.log(props);
  const [open, setOpen] = React.useState(props.sopen);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <i>
      <button type="submit" className="sanbtncolor sanuppercase" onClick={(e) => props.funcup(e)}>Save
                                </button>
      <Modal
        open={props.sopen}
        onClose={()=>props.close()}
      aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Freight Details Updated....
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <center><Button class="sanbtncolor sanuppercase" onClick={()=>history.push("/home")}>OK</Button></center>
          </Typography>
        </Box>
      </Modal>
    </i>
  );
}
