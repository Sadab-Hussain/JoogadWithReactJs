import React from 'react';

const SignupForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center" style={{backgroundColor :'#C9A07A',color:'#8E4739'}}>
              <h5 className="mb-0">Sign Up</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="image">Profile Picture</label>
                  <input type="file" className="form-control-file" id="image" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select className="form-control" id="gender">
                    <option>Male</option>
                    <option>Female</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" className="form-control" id="dob" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea className="form-control" id="address" rows="3" placeholder="Enter your address"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                
                <button type="submit" className="btn btn-block" style={{backgroundColor :'#C9A07A',color:'#8E4739',fontWeight:'bold'}}>Sign Up</button>
              </form>
            </div>
            <div className="card-footer">
              <p className="text-center mb-0">Already have an account? <a href="/login" style={{color :'#8E4739'}}>Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
