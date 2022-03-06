import React,{useState, useRef} from "react";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import styles from "./SingleProductPage3.module.css";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Alert from '@mui/material/Alert';

export const SingleProductPage3 = () => {

  const[alert, setAlert] = useState(true);
  const [pin, setPin] = useState();
  const pinCheck = () =>{
    if(pin.length < 6 ){
       setAlert(false);
      // alert("Please enter a valid code");
    }
  }

  return ( 
    <>
      <div style={{ display: "flex", paddingTop: "2rem" }}>
        <h3>DELIVERY OPTIONS</h3>
        <span>
          <DriveEtaIcon />
        </span>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        // autoComplete="off"
        border= '1px solid grey'
        width = '300px'
      >
        <Input type = "text" placeholder="Enter a PIN Code" onChange={(e) => setPin(e.currentTarget.value)} />
        {alert ? ( <Button onClick={() => pinCheck()}>Check</Button>):
           ( <Button onClick={() => pinCheck()}>Change</Button>)
        }
       
      </Box>
      <br />
   
      <small>
        Please enter PIN code to check delivery time & Pay on Delivery
        Availability.
      </small>
      <hr />
      <br />
      <br />
      <div>
        <ul className={styles.li}>
          <li>100% Original Products</li>
          <li>Pay on delivery might be available</li>
          <li>Easy 30 days returns and exchanges</li>
          <li>Try & Buy might be available</li>
        </ul>
      </div>
      <br /> <br />
      <h2>BEST OFFERS</h2>
      <br />
      <h3>
        Best Price: <span>Rs. 1029</span>
      </h3>
      <div>
        <ul>
          <li> Coupon code: NIGHTOWL200</li>
          <li>Coupon Discount: Rs. 200 off (check cart for final savings)</li>
          <li>Applicable on: Orders above Rs. 1199 (only on first purchase)</li>
        </ul>
      </div>
      <br /> <br /> <br />
    </>
  );
};
