import React from "react";
import Marquee from "react-fast-marquee";
const LogoMarquee = () => {
  return (
    <div
      className="logo-section mb-110 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="container-fluid">
        <div className="logo-wrap">
          <div className="logo-title">
            <h6>Partnered with the World's Biggest Brands</h6>
          </div>
          <div className="logo-area">
            <div className="marquee_text2">
              <Marquee>
                <a href="#">
                  <img src="assets/img/home1/deloite 1.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/bosch 1.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/apple 1 (1).png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/acecenture 1.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/gogle 1.png" alt="" />
                </a>
                <a href="#">
                  <img src="assets/img/home1/sony 1.png" alt="" />
                </a>
                <a href="#">
                  <img
                    src="assets/img/home1/Atlassian-grey-logo 1 (1).png"
                    alt=""
                  />
                </a>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
