import React from 'react'
import "./header.css"
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  return (
  <nav
  className="navbar navbar-expand-lg navbar-dark sticky-top"
  style={{ backgroundColor: "#4CAF50" }}
>
  <div className="container-fluid">
    <div className="row w-100 align-items-center">
      
      <div className="col-12 col-md-4 d-flex align-items-center justify-content-start">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src="/assets/images/logo.jpeg"
            width={50}
            height={50}
            alt="Logo"
            className="me-3"
          />
          <div>
            Paradise Nursery
            <p
              className="mb-0 small fst-italic"
              style={{ fontSize: "0.85rem" }}
            >
              Where Green Meets Serenity
            </p>
          </div>
        </Link>
      </div>

     
      <div className="col-12 col-md-4 d-flex justify-content-center">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link fw-semibold text-white" to="/plant">
              Plants
            </Link>
          </li>
         
        </ul>
      </div>

   
     <div className="col-12 col-md-4 d-flex justify-content-end align-items-center position-relative">
      <Link to="/cart">
       <FaShoppingCart
    size={26}
    color="white"
    style={{ cursor: "pointer" }}
  />

  {/* Badge Count */}
  <span
    className="position-absolute translate-middle badge rounded-pill bg-danger"
    style={{ top: "0px", right: "2px", fontSize: "12px" }}
  >
    {useSelector((state) => state.cart.totalQuantity)}
  </span>
      </Link>
 
</div>

    </div>
  </div>
</nav>

  )
}

export default Header