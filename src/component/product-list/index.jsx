import React from "react";

import { Link } from "react-router-dom";
import { cartActions } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProductList = ({products}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart);
     const handleAddToCart = (item) => {
    const exists = cartItems.some((cartItem) => cartItem.id === item.id);

     if (exists) {
      toast.error("This item is already in your cart!");
    } else {
      dispatch(cartActions.addItem(item));
      toast.success("Added to cart!");
    }
  };
  return (
    <div className="container-md mx-auto mt-4">
      <div className="row">
        {products?.map((item) => (
          <>
            <div className="col-12 col-md-6 col-lg-3 mb-4 ">
           
                <div className="card p-3 pb-2 relative shadow">
                  <span class="badge bg-danger position-absolute top-0 end-0 px-3 py-2">
                    Sale
                  </span>
                  <h6 className="font-bold fs-5 mt-3">{item?.name}</h6>
                     <Link to={`/plant/${item?.id}`} className="">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    width={200}
                    height={200}
                    className="mx-auto "
                  />
                  </Link>
                  <p className="text-danger mb-0">${item?.price}</p>
                  <p className="fs-6 ">{item?.description.slice(0, 50)}</p>
                  
                  <button className="btn text-white btn-md bg-success mx-auto mb-0"
                          onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
