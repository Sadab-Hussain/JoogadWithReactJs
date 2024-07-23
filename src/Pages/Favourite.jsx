import React from 'react';

const Favourite = () => {
  return (
    <section class="vh-100 justify-content-center">
    <div className="container h-100 text-center">
        <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-12">
      <img src={require("../Assets/image/heart.png")} alt="Cart Icon" className="mb-3" style={{ width: '150px', height: '150px' }} />
      <h2>Your Favorites List is Empty</h2>
      <p className="">Please add some items to your favourite list.</p>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Favourite;
