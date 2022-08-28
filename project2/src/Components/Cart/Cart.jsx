import React from 'react'
import CartNavbar from './CartNavbar'
import "./Cart.css"
// import DiscountOutlined from "@mui/icons-material"
import DiscountIcon from '@mui/icons-material/Discount';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useStateValue } from '../../StateProvider';
import CartItem from './CartItem';
import CartRight from './CartRight';

function Cart() {
    const [ {basket} , dispatch] = useStateValue();
    
    // console.log(basket)
  return (
    <div>
        <CartNavbar color1={"red"} />
        <div className='cart' >
            <div className='cartLeft' >
                <div className='cartleftTop' >
                    <div>Check delivery time & services</div>
                    <div className='PinCode' >Enter Pin Code</div>
                </div>
                <div className='cartleftMiddle' >
                    <div className='cartMiddle1' >
                        <DiscountIcon style={{width:"15px",height:"25px"}} />
                        <p>Available Offers</p>
                    </div>
                    <p className='firstOffer' >10% Instant Discount on Bank Of Baroda Credit cards on a min spend of Rs 3,000.TCA</p>
                    <Accordion>
                        <AccordionSummary 
                        expandIcon={
                            <ExpandMoreIcon style={{color:"#ff3f6c",marginLeft:"-485px",fontSize:"12px"}} />
                        }
                        aria-controls="panella-content"
                        id="panella-header"
                        >
                        <Typography style={{color:"#ff3f6c",marginBottom:"none",fontSize:"12px"}} >
                            Show More
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                            10% Instant Discount on Bank Of Baroda Credit cards on a min
                            spend of Rs 3,000.TCA
                            </Typography>
                            <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                            5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                            </Typography>
                            <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                            10% Cashback upto Rs 100 on Paytm Postpaid transaction on a
                            min spend of Rs 1000 . TCA
                            </Typography>
                            <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                            15% Cashback upto Rs 150 on Freecharge Paylater transaction.
                            TCA
                            </Typography>
                            <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                            10% Cashback upto Rs 200 on Ola Money Postpaid or wallet
                            transaction on a min spend of Rs 1000 . TCA
                            </Typography>
                            <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                            Upto Rs 500 Cashback on Mobikwik Wallet Transactions on a min
                            spend of Rs 999.Use code MBK500 on Mobikwik. TCA{" "}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* start */}
                    
                </div>
                <div className='cartItemDiv' >
                    {basket.map((item)=> {
                        return <CartItem key={item[0].id} {...item[0]} />  
                    })}
                </div>
            </div>
            <div >
                <CartRight/>
            </div>
        </div>
    </div>
  )
}

export default Cart