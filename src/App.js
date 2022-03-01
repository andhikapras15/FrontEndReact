import React from "react";
import "./App.css";


function App() {
  return (
    <div className="gradient-container">
      {/* <!-- Header Start --> */}
      <div className="header-container d-flex justify-content-space-between">
        <div className="logo">LOGO</div>
        <div className="menu-container">
          <div className="text-primary garis">Home<i className="fa-solid fa-bars"></i></div>
          <div>About</div>
          <div>contact us</div>
        </div>
      </div>
      {/* Header End */}
      {/* jumbotron 1 start */}
      <div className="jumbotron-1-container pd-container-hz">
        <div className="kiri">
          <div className="title">New E-commerce App best for You</div>
          <div className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed
            vulputate vitae velit dictum cursus amet. Turpis donec ut velit
            quis. Cursus commodo, eget urna, sapien amet.
          </div>
          <div className="button-container">
            <button>Playstore</button>
            <button>app store</button>
          </div>
        </div>
        <div className="kanan">
          <div className="image-container">
            <img src="./assets/Mockup.svg" alt="image1" height="100%" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;