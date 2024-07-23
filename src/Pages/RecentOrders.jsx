import React from 'react';

const RecentOrdersPage = () => {
  // Sample data for recent orders
  const recentOrders = [
    {
      id: 1,
      product: 'Corn',
      quantity: 2,
      price: 10.99,
      date: '2024-02-15',
      image: require("../Assets/image/product5.jpg"),

    },
    {
      id: 2,
      product: 'Lemon',
      quantity: 1,
      price: 5.99,
      date: '2024-02-14',
      image: require("../Assets/image/product6.jpg"),

    },
    {
      id: 3,
      product: 'Cucumber',
      quantity: 3,
      price: 7.99,
      date: '2024-02-13',
      image: require("../Assets/image/product3.jpg"),

    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Recent Orders</h2>
      <div className="row">
        {recentOrders.slice(0, 6).map(order => (
          <div key={order.id} className="col-md-6 mb-4">
            <div className="card" style={{ height: '100%' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={order.image} className="card-img" alt={order.product} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{order.product}</h5>
                    <p className="card-text">

                      <strong>Quantity:</strong> {order.quantity}<br />
                      <strong>Price:</strong> ${order.price}<br />
                      <strong>Date:</strong> {order.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrdersPage;
