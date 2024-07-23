import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>

      <footer class="text-center text-lg-start bg-body-tertiary text-muted mt-5">

        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ color: '#8E4739', fontWeight: 'bold', backgroundColor: '#DDD2C6' }}>

          <div class="me-6 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <Link to="/" class="mx-1 text-reset">
              <i class="fab fa-facebook-f"></i>
            </Link>
            <Link to="/" class="mx-1 text-reset">
              <i class="fab fa-twitter"></i>
            </Link>
            <Link to="/" class="mx-1 text-reset">
              <i class="fab fa-google"></i>
            </Link>
            <Link to="/" class="mx-1 text-reset">
              <i class="fab fa-instagram"></i>
            </Link>
            <Link to="/" class="mx-1 text-reset">
              <i class="fab fa-linkedin"></i>

            </Link>
          </div>

        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  <img src={require("../Assets/image/joogad-logo-zip-file/png/logo-no-background.png")} style={{ width: "auto", height: "200px" }} alt="" />
                </h6>

              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  <b> Products Type </b>
                </h6>
                <p>
                  <Link to="/" class="text-reset">Fruits</Link>
                </p>
                <p>
                  <Link to="/" class="text-reset">Vegetables</Link>
                </p>
                <p>
                  <Link to="/" class="text-reset">Beverages</Link>
                </p>
                <p>
                  <Link to="/" class="text-reset">Dairy</Link>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold mb-4">
                  <b>Useful links</b>
                </h6>
                <p>
                  <Link to="/products" class="text-reset">Products</Link>
                </p>
                <p>
                  <Link to="/cart" class="text-reset">Cart</Link>
                </p>
                <p>
                  <Link to="/profile" class="text-reset">Profile</Link>
                </p>
                <p>
                  <Link to="/recentorders" class="text-reset">Recent Orders</Link>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold mb-4"><b>Contact</b></h6>
                <p><i class="fas fa-home me-3"></i> Marwadi University, Near Morbi Highway, Rajkot - 360003</p>
                <p>
                  <i class="fas fa-envelope me-3"></i> help@joogad.com
                </p>
                <p><i class="fas fa-phone me-3"></i> +91 7091733441</p>
                <p><i class="fas fa-print me-3"></i> +91 9876543210</p>
              </div>

            </div>

          </div>
        </section>
        <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright:
        <Link class="text-reset fw-bold" to="/">Joogad</Link>
        </div>

      </footer>

    </>
  );
};

export default Footer;
