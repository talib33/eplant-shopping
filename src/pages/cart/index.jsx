/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
      const dispatch = useDispatch();
  const { cart ,totalAmount ,  } = useSelector((state) => state.cart);
  console.log("cart==>" , cart);
  
  return (
    <div className='container justify-content-center align-items-center py-5'>
        <h6 className='fs-4 text-center '> Total Cost Amount: ${totalAmount}</h6>
        {cart.length > 0 ? <>
        
        </> : ""}
        {cart?.map((item)=>(
          <div className="card mb-3 mx-auto mt-4 shadow-sm" style={{ maxWidth: "300px" }}>
  <div className="row g-0 align-items-center pb-0">
    <div className="col-12 col-md-5">
      <img
        src={item?.image}
        alt={item?.name}
        className="img-fluid rounded-start"
        style={{ height: "180px", objectFit: "cover", width: "100%" }}
      />
    </div>
    <div className="col-12 col-md-7 p-1 px-2 pb-0">
      <h6 className="fw-bold fs-6">{item?.name}</h6>
      <p className="text-success fw-semibold mt-2 mb-1">${item?.price}</p>
      <div className='d-flex w-100 justify-between mb-1 align-items-center'>
        <button
          className="btn btn-sm  w-100  btn-light fw-bold"
          onClick={() => dispatch(cartActions.decreaseCart(item))}
        >
          −
        </button>
        <span className="fw-bold fs-6 w-100 text-center">{item?.quantity}</span>
        <button
          className="btn btn-sm w-100 btn-light fw-bold"
          onClick={() => dispatch(cartActions.incrementCart(item))}
        >
          +
        </button>
        </div>
          <p className="text-black fw-semibold mt-3 mb-0">
       Total: ${item?.price * item?.quantity}
      </p>
        <button className='bg-danger btn btn-sm d-flex mx-auto text-white mt-2'
        onClick={()=>dispatch(cartActions.removeItem(item))}
        >Delete</button>
    </div>
  </div>
</div>

        ))}

      <div className="d-flex flex-column align-items-center w-100">
        <Link to="/plant">
          <button className="btn btn-success btn-md text-white mt-2  w-15" style={{width:"200px"}}>
    Continue Shopping
  </button>
        </Link>
 <Link to="/checkout">
  <button className="btn btn-success btn-md text-white mt-2 " style={{width:"200px"}}>
    Checkout
  </button>
  </Link>
</div>


    </div>
  )
}

export default ShoppingCart