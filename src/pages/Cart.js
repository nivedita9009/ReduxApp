import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { remove} from '../store/cartSlice'; 


const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(state =>state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }
  return (
   <div>

    <h3 className='cart'><u>Cart</u></h3>
    <div className='cartWrapper'>
      {
        products.map(product =>(
          <div className='cartcard'>
            <img className='image' src={product.image} alt="" />
            <h5 className='title'>{product.title}</h5>
            <h5 className='price'>{product.price}</h5>
            <button className='btn'onClick={()=> handleRemove(product.id)}>Remove</button>

          </div>
        ))
      }
    </div>
   </div>
  )
}

export default Cart