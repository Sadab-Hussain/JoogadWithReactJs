import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-md navbar-light bg-secondary">
      <Link className="navbar-brand" to="/">
        <img src={require("../Assets/image/logo-brown-transparent.png")} alt="Joogad Logo" style={{ width: '225px', height: '70px' }} />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse"  id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/contactus">Contact Us</NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" activeClassName="active" to="#" role="button" data-toggle="dropdown" aria-expanded="false">
              Login
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item"  to="/login">Login</Link>
              <Link className="dropdown-item"  to="#">Logout</Link>
              <Link className="dropdown-item"  to="/signup">Sign Up</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/profile">Profile</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/cart">Cart</Link>
              <Link className="dropdown-item" to="/favourite">Favourite</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/recentorders">Recent Orders</Link>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/addproducts">Add Product</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
