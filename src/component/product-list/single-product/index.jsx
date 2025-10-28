import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../../redux/cartSlice';



const SingleProductComponent = ({plants}) => {
      const cartItems = useSelector((state) => state.cart.cart);
      const dispatch = useDispatch();
     const handleAddToCart = (item) => {
    const exists = cartItems.some((cartItem) => cartItem.id === item.id);
    if (exists) {
      alert("This item is already in your cart!");
    } else {
      dispatch(cartActions.addItem(item));
      alert("Added to cart!");
    }
  };

  return (
   <div className='container py-3 mx-auto justify-content-center align-items-center'>
         <h6 className='text-center fs-2 pb-4'>Product Detail</h6>
        <div className="row">
            <div className="col col-md-4 ">
                <img src={plants?.image} className='' style={{width:"100%", height:"300px" , objectFit:"contain"}}  />
            </div>
            <div className="col col-md-8 ">

                
                 <h6 className='font-bold fs-5 mt-3'>{plants?.name}</h6>
                 <p>{plants?.description}</p>
                 <p className='text-danger font-bold'>${plants?.price}</p>
                 <button className="btn text-white btn-md bg-success mx-auto mb-0 mt-3"
                 onClick={()=>handleAddToCart(plants)}
                 >Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default SingleProductComponent