import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {ComponentToPrint} from './Print';
import { AiFillPrinter } from 'react-icons/ai';


export default function PrintBtn(props)

{
    console.log(props);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
   
  });
  
  return (
      <div>
          <ComponentToPrint ref={componentRef} data={props.data} amount={props.amount}/>
         <div className="divsprint"><button className="divsprintbtn" onClick={handlePrint} ><center><AiFillPrinter size={30 } color="#012443" /> </center></button></div><br/>
            
            </div>
        );
};

