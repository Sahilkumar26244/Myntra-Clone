import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import "./Cart.css"

function CartRight() {
    const [ {basket} , dispatch] = useStateValue();
    // console.log(basket)
    
    let totalAmount = 0;
    basket?.map(
        (e) => 
        (totalAmount += Math.floor(
            Number(e[0].off_price) * ((100- Number(e[0].discount))/100)
        ))
    );
    console.log(totalAmount)
    let totalMRP = 0;
    basket?.map((e)=> (totalMRP += Math.floor(Number(e[0].off_price))));

    let totalDiscount = totalMRP - totalAmount;



  return (
    <div className='cartRight' >
        <p className='cartRight1' >DONATE FOR COVID-19 RELIEF</p>
        <div className='donate' >
            <div>₹10</div>
            <div>₹50</div>
            <div>₹100</div>
            <div style={{width:"15%"}} >Other</div>
        </div>
        <div className='knowMore' >Know More</div>
        <hr style={{marginTop:"35px",color:"lightgray"}} ></hr>
        <div className='allPrice' >
            <p className='priceDetails' >PRICE DETAILS ({basket.length}Items)</p>
            <div className='price1' >
                <p>Total MRP</p>
                <p>₹{totalMRP}</p>
            </div>
            <div className='price1' >
                <p>Discount on MRP</p>
                <p style={{color:"#5ccea8"}} >-₹{totalDiscount}</p>
            </div>
            <div className='price1' >
                <p>Convenience Fee<strong style={{color:"#ee4f6c"}} >Know More</strong></p>
                <p style={{color:"#5ccea8"}} >Free</p>
            </div>
            <hr style={{marginTop:"5px",color:"lightgray"}} ></hr>
            <div className='total' >
                <p>Total Amount</p>
                <p>₹{totalAmount}</p>
            </div>
            <Link style={{textDecoration:"none"}} to="/address" >
            <div className='placeOrder' >
                PLACE ORDER
            </div>
            </Link>
            
        </div>
    </div>
  )
}

export default CartRight