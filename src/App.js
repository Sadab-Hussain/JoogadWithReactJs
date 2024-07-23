import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Navbar from "./Layouts/Navbar";
import './App.css';
import Footer from "./Layouts/Footer";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import Favourite from "./Pages/Favourite";
import RecentOrdersPage from "./Pages/RecentOrders";
import SignupForm from "./Pages/Signup";
import ProfilePage from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/addproducts" element={<AddProduct/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/favourite" element={<Favourite/>}></Route>
      <Route path="/recentorders" element={<RecentOrdersPage/>}></Route>
      <Route path="/signup"  element={<SignupForm />}></Route>
      <Route path="/profile"  element={<ProfilePage />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
