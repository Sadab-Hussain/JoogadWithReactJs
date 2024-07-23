import React, { useState } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    profilePic: require('../Assets/image/profile.png'),
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@example.com',
    phoneNumber: '123-456-7890',
    dob: '1990-01-01',
    gender: 'Male',
    address: '123 Main Street, City, Country',
  });

  // Function to handle profile picture change
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({
          ...profile,
          profilePic: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to trigger file input when profile picture is clicked
  const handleProfilePicClick = () => {
    document.getElementById('profile-upload').click();
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center" style={{backgroundColor :'#C9A07A'}}>
              <h5 className="mb-0">Profile</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group text-center">
                  
                  <div className="profile-pic-container" onClick={handleProfilePicClick}>
                    <img
                      src={profile.profilePic}
                      alt="Profile"
                      className="img-fluid mb-3 rounded-circle"
                      style={{ width: '80px', height: '80px', cursor: 'pointer' }}
                    />
                    <input
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePicChange}
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div>{profile.firstName} {profile.lastName}</div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" value={profile.email} />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" className="form-control" id="phoneNumber" value={profile.phoneNumber} />
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" className="form-control" id="dob" value={profile.dob} />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select className="form-control" id="gender" value={profile.gender}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <textarea className="form-control" id="address" rows="3">
                    {profile.address}
                  </textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn mr-2" style={{backgroundColor :'#8E4739'}}>
                    Save
                  </button>
                  <button type="button" className="btn" style={{backgroundColor :'#C9A07A'}}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
