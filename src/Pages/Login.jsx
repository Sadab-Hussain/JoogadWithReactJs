import React, { useState } from 'react';


const Login = () => {

  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 mb-3 col-lg-7 col-xl-6">
            <img src={require("../Assets/image/phone.png")}
              class="img-fluid" alt="Phone image" />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div class="form-outline mb-2">
                <div className="card-header text-center my-1" style={{ backgroundColor: '#C9A07A', color: '#8E4739' }}>
                  <h5 className="mb-0">Login</h5>
                </div>

                <input type="email" id="form1Example13" class="form-control form-control-lg" />
                <label class="form-label" for="form1Example13">Email address</label>
              </div>

              <div class="form-outline mb-2">
                <input type="password" id="form1Example23" class="form-control form-control-lg" />
                <label class="form-label" for="form1Example23">Password</label>
              </div>
              <div class="d-flex justify-content-around mb-2">
                <div class="form-check">
                  <a href="/signup" style={{ color: '#8E4739' }}>Register Here</a>
                </div>
                <a href="#!" style={{ color: '#8E4739' }}>Forgot password?</a>
              </div>
              <button type="submit" class="btn btn-lg btn-block mb-5" style={{ backgroundColor: '#8E4739', color: '#DDD2C6', fontWeight: 'bold' }}>Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
