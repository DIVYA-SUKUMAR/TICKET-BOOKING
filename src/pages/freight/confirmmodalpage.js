import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useHistory } from "react-router-dom";

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
    const history1 = useHistory();
    console.log(props)
    const [open, setOpen] = React.useState(props.sopen);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <i >
            <button type="submit" className="sanbtncolor sanuppercase" onClick={(e)=>{props.func(e)}}>Book My Freight

                            </button>
            <Modal
                open={props.sopen}
                onClose={()=>{props.close()}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <center className="santxtbold">Check Your Details</center>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form className="santxtbold"><div class="santxtpadding">
                            <label className="sanlabel1">Freight Name:</label>
                            <input className="sanin sanselect1"value={props.sfn} disabled></input>
                        </div>
                        <div class="santxtpadding">
                            <label className="sanlabel1">Freight Type:</label>
                            <input className="sanin sanselect1" value={props.sft} disabled></input>
                        </div>
                        <div class="santxtpadding">
                            <label className="sanlabel1">From:</label>
                            <input className="sanin sanselect1" value={props.sfrom} disabled></input>
                        </div>
                        <div class="santxtpadding">
                            <label className="sanlabel1">To:</label>
                            <input className="sanin sanselect1" value={props.sto} disabled></input>
                        </div>
                        <div class="santxtpadding"><label className="sanlabel1">Departure:</label>
                            <input className="sanin sanselect1" value={props.sdep} disabled></input></div>
                        <div class="santxtpadding"><label className="sanlabel1">Arrival:</label>
                            <input className="sanin sanselect1" value={props.sarrival} disabled></input></div>
                            <div class="sanbtnre">
                        <button className="sanbtncolor sanuppercase" type="button" onClick={() => history1.push({pathname:"/update", state:{ sfid:props.sfid,sfn: props.sfn, sft:props.sft, sfrom: props.sfrom, sto: props.sto, sdep: props.sdep, sarrival: props.sarrival }})}>Edit</button>
                        
                        <button className="sanbtncolor sanuppercase" onClick={()=>props.close()}>Cancel</button>
                        </div> </form>
                    </Typography>
                </Box>
            </Modal>
        </i>
    );
}

