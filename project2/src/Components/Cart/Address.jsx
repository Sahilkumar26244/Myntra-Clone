import React from 'react'
import "./CartNav.css"
import { Link } from 'react-router-dom'
import "./Address.css"
import { useStateValue } from '../../StateProvider';

function Address() {

    const [ {basket} , dispatch] = useStateValue();
    // console.log(basket)
    
    let totalAmount = 0;
    basket?.map(
        (e) => 
        (totalAmount += Math.floor(
            Number(e[0].off_price) * ((100- Number(e[0].discount))/100)
        ))
    );
    // console.log(totalAmount)
    let totalMRP = 0;
    basket?.map((e)=> (totalMRP += Math.floor(Number(e[0].off_price))));

    let totalDiscount = totalMRP - totalAmount;

  return (
    <div>
        <div className='cartNavbar' >
            <div className='cartMain' >
                <Link to="/" >
                    <div className='logo' >
                        <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt="" />
                    </div>
                </Link>
                
                <div className='cartMiddle' >
                    <p style={{color:"#696b79"}} >BAG</p>
                    <p style={{color:"#696b79"}} >-------</p>
                    <p style={{color:"#20bd99",borderBottom:"2px solid #20bd99"}}  >ADDRESS</p>
                    <p style={{color:"#696b79"}} >-------</p>
                    <p className='payCheck' >PAYMENT</p>
                </div>
                <div className='cartEnd' >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA4CAMAAACFZCuiAAAAjVBMVEUAAAAXz6su7sAUzagUzqkUzakUzqkX0q0UzqkUzqkUzqkVz6oV0KoVzakUzqkUzqkVz6kVzqgVzqkVzqkVz6kVzqkX0Ksd164UzqkUzakVzqkW0KoVz6odzrEW06xO/8kUzqkUzqgVzqkVzqgVzqkUz6gUzqkVzqkUz6kVzqkWz6kWz6sa06oZ2bIUzajYy6R3AAAALnRSTlMAPwXs+fHgINqylUk79+e/evSFdGxaKA2Yi4JDMBoWA8/Gt66rpp+OfmZQORMKx0CQ3gAAAXlJREFUSMft1VlvgkAUhuEPZFUElwLuu7ZaPf//5zWTSIEzG1z0ru8NCclDchLmDH77IHMZFM0sKFKhjCztZLPzbOguo0+yFbjcbDyytmImTKlDecskzOia1KS4UtcOD1eI2TWiPvnxIsSAeuf8oz9F3rQ/8kbJVEapxQCJz14miGwG+GaqMJ7ysTCy2uFsN/xY77HQm7V6uw1Um2tsNhQpduQiDMRjqjOUARv2aggINXUqMyfWDNj73AhlMDQCcOJGqERvqAQwac7ook5jDgDgUKNrQ9UflAdwW7/sxeVGHkm0JKaMJthDVFCrc6W+jEs248pgvO0b5dQuFmpFyi5456ayWmn3Q1VOXM00Jkbdkbo1Di33oP0uHHYywauFnmkX9EC7xLObJXh3qzntubGPFZWQczOj8Quoeh5NxoG610lr0g10uTfdPCEMLZXmsIOx3JfNooSlbcxIsEaH8kHTDEt0anvzKnJ00Lnt0hckTtCrch7cCmj6ATrZZU005i+rAAAAAElFTkSuQmCC" alt='' />
                    <p>100% SECURE</p>
                </div>
            </div>
        </div>
        <div className='addressBoxes' >
            <div className='addressBox1' >
                <div className='add1' >
                    <p className='contact' >CONTACT DETAILS</p>
                    <input type="text" placeholder="Name*" />
                    <input type="text" placeholder="Mobile No*" />
                    <p className='contact' >ADDRESS</p>
                    <input type="text" placeholder="Pin Code*" />
                    <input type="text" placeholder="Address(House No, Building,Street,Area)*" />
                    <input type="text" placeholder="Locality / Town*" />
                    <div className='cityBox' >
                        <div><p>City / Distict*</p></div>
                        <div><p>State*</p></div>
                    </div>
                    <p className='contact' >SAVE ADDRESS AS</p>
                    <div className='contactUs' >
                        <div>Home</div>
                        <div>Work</div>
                    </div>
                    <div className='addAddress' >
                        <div><p>ADD ADDRESS</p></div>
                    </div>
                </div>
                
            </div>
            <div className='addressBox2' >
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
                <p>{totalMRP}</p>
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
            <Link style={{textDecoration:"none"}} to="/payment" >
                <div className='placeOrder' >
                    PLACE ORDER
                </div>
            </Link>
            
        </div>
    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Address