import React from "react";

const Hero = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require("../Assets/image/1.jpg")} className="d-block w-100" alt="Slide 1" style={{ height: "600px", objectFit: "cover" }} />
        </div>
        <div className="carousel-item">
          <img src={require("../Assets/image/2.jpg")} className="d-block w-100" alt="Slide 2" style={{ height: "600px", objectFit: "cover" }} />
        </div>
        <div className="carousel-item">
          <img src={require("../Assets/image/3.jpg")} className="d-block w-100" alt="Slide 3" style={{ height: "600px", objectFit: "cover" }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default Hero;
