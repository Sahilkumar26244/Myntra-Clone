import React from 'react'
import "./Cart.css"
import { useStateValue } from '../../StateProvider';
import ClearIcon from '@mui/icons-material/Clear';

function CartItem({images,id,title,sizes,price,off_price,discount,brand}) {
    // console.log(id)
    const [ {basket} , dispatch] = useStateValue();

    const removeFromBasket=(id)=>(
        
        dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id,
        })
      )

  return (
    <div className='cartItem' >
        <div className='cartItemImg' >
            <img src={images.image1} />
        </div>
        <div className='cartItemInfo' >
            <div className='clear' >
                <button className='xyz' onClick={()=> removeFromBasket(id) } >
                    <ClearIcon style={{color:"black",width:"25px",height:"25px"}} />
                </button>
            </div>
            <p className='brand' >{brand}</p>
            <p className='title' >{title}</p>
            <div className='sizeDiv' ><h4>{`Size: ${sizes[1]}`}</h4></div>
            <div className='priceBox' >
                <div>
                    <p>{`₹${price}`}</p>
                </div>
                <div>
                    <p className='offpriceBox' >{`₹${off_price}`}</p>
                </div>
                <div>
                    <p style={{color: "#ff3f6c"}} >{`₹${discount}% OFF`}</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CartItem