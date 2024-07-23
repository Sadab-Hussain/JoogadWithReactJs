import React from "react";
import Hero from "../Components/Hero";

const Home = () =>{
    return (
        <>
            <Hero />
            <div className="container mt-5">
                <div className="row justify-content-center" style={{backgroundColor :'#8E4739'}}>
                    <h2 className="mt-2" style={{color:'#DDD2C6',fontWeight: 'bold'}}>
                        Deal of the Month
                    </h2>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <img src={require("../Assets/image/grocery.jpg")} className="d-block w-100" alt="..." />
                    </div>
                    <div className="col-md-5">
                        <h3>Fresh Spices</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor tincidunt turpis, sed posuere metus euismod ac.</span>
                        <h4>Per Kg $5</h4>
                        <button className="btn" style={{backgroundColor :'#8E4739',color:'#DDD2C6'}}> <i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row justify-content-center" style={{backgroundColor :'#8E4739'}}>
                    <h2 className="mt-1" style={{color:'#DDD2C6',fontWeight: 'bold'}}>
                        Exciting Offers
                    </h2>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-2">
                    <div className="col px-2">
                        <img src={require("../Assets/image/offer1.jpg")} className="w-100" alt="Offer 1" />
                    </div>
                    <div className="col px-2">
                        <img src={require("../Assets/image/offer2.jpg")} className="w-100" alt="Offer 2" />
                    </div>
                    <div className="col px-2">
                        <img src={require("../Assets/image/offer3.jpg")} className="w-100" alt="Offer 3" />
                    </div>
                    <div className="col px-2">
                        <img src={require("../Assets/image/offer4.jpg")} className="w-100" alt="Offer 4" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
