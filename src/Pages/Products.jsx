import React from 'react';


const ProductCard = ({ image, title, price, description }) => {
    return (
        <div className="col-md-4 mb-4">
          <div className="card h-100 p-4">
            <img src={image} className="card-img-top" alt={title} style={{ objectFit: 'cover', height: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <button className="btn" style={{ backgroundColor: '#8E4739', color: '#DDD2C6', fontWeight: 'bold' }}>
                <i className="fa-solid fa-cart-plus"></i> ${price}
              </button>
            </div>
          </div>
        </div>
      );
};

const Products = () => {
  const products = [
    {
      id: 1,
      image: require("../Assets/image/product1.jpg"),
      title: 'Tomatoes',
      price: 19.99,
      description: 'Description for Product 1',
    },
    {
      id: 2,
      image: require("../Assets/image/product2.jpg"),
      title: 'Capsicum',
      price: 29.99,
      description: 'Description for Product 2',
    },
    {
      id: 3,
      image: require("../Assets/image/product3.jpg"),
      title: 'Cucumber',
      price: 39.99,
      description: 'Description for Product 3',
    },
    {
      id: 4,
      image: require("../Assets/image/product4.jpg"),
      title: 'Potatoes',
      price: 49.99,
      description: 'Description for Product 4',
    },
    {
      id: 5,
      image: require("../Assets/image/product5.jpg"),
      title: 'Corn',
      price: 59.99,
      description: 'Description for Product 5',
    },
    {
      id: 6,
      image: require("../Assets/image/product6.jpg"),
      title: 'Lemon',
      price: 69.99,
      description: 'Description for Product 6',
    },
  ];

  return (
    <div className="container my-5">

    <div className="row">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
    </div>
  );
};

export default Products;
