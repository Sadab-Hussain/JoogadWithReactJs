import React from 'react';

const CartPage = () => {
  return (
    <section class="vh-100 justify-content-center">
    <div className="container h-100 text-center">
        <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-12">
      <img src={require("../Assets/image/shopping-cart.png")} alt="Cart Icon" className="mb-3" style={{ width: '150px', height: '150px' }} />
      <h2>Your Cart is Empty</h2>
      <p className="">Please add some items to your cart.</p>
    </div>
    </div>
    </div>
    </section>
  );
};

export default CartPage;
