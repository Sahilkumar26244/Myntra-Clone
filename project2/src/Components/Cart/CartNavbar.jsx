import React from 'react'
import { Link } from 'react-router-dom'
import "./CartNav.css"

function CartNavbar() {
  return (
    <div className='cartNavbar' >
        <div className='cartMain' >
            <Link to="/" >
                <div className='logo' >
                    <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt="" />
                </div>
            </Link>
            
            <div className='cartMiddle' >
                <p className='bagCheck' >BAG</p>
                <p>-------</p>
                <p className='addCheck' >ADDRESS</p>
                <p>-------</p>
                <p className='payCheck' >PAYMENT</p>
            </div>
            <div className='cartEnd' >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA4CAMAAACFZCuiAAAAjVBMVEUAAAAXz6su7sAUzagUzqkUzakUzqkX0q0UzqkUzqkUzqkVz6oV0KoVzakUzqkUzqkVz6kVzqgVzqkVzqkVz6kVzqkX0Ksd164UzqkUzakVzqkW0KoVz6odzrEW06xO/8kUzqkUzqgVzqkVzqgVzqkUz6gUzqkVzqkUz6kVzqkWz6kWz6sa06oZ2bIUzajYy6R3AAAALnRSTlMAPwXs+fHgINqylUk79+e/evSFdGxaKA2Yi4JDMBoWA8/Gt66rpp+OfmZQORMKx0CQ3gAAAXlJREFUSMft1VlvgkAUhuEPZFUElwLuu7ZaPf//5zWTSIEzG1z0ru8NCclDchLmDH77IHMZFM0sKFKhjCztZLPzbOguo0+yFbjcbDyytmImTKlDecskzOia1KS4UtcOD1eI2TWiPvnxIsSAeuf8oz9F3rQ/8kbJVEapxQCJz14miGwG+GaqMJ7ysTCy2uFsN/xY77HQm7V6uw1Um2tsNhQpduQiDMRjqjOUARv2aggINXUqMyfWDNj73AhlMDQCcOJGqERvqAQwac7ook5jDgDgUKNrQ9UflAdwW7/sxeVGHkm0JKaMJthDVFCrc6W+jEs248pgvO0b5dQuFmpFyi5456ayWmn3Q1VOXM00Jkbdkbo1Di33oP0uHHYywauFnmkX9EC7xLObJXh3qzntubGPFZWQczOj8Quoeh5NxoG610lr0g10uTfdPCEMLZXmsIOx3JfNooSlbcxIsEaH8kHTDEt0anvzKnJ00Lnt0hckTtCrch7cCmj6ATrZZU005i+rAAAAAElFTkSuQmCC" alt='' />
                <p>100% SECURE</p>
            </div>
        </div>
    </div>
  )
}

export default CartNavbar