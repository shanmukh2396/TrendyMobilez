import React from "react";
import "../styles/Carousel.css";

const Carousel = () => {
  return (
    <div
      id="demo"
      className="carousel slide custom-carousel"
      data-bs-ride="carousel"
      data-bs-wrap="true"
      data-bs-interval="2500"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {[0, 1, 2, 3, 4].map((num) => (
          <button
            key={num}
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={num}
            className={num === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51cmWA2a0s1QLy46Innd_uMV0QsXi6bNo9g&s"
            alt="Vivo"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/p/v/p/-original-imah3cmbhgfymupr.jpeg?q=90"
            alt="Oppo"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/i/s/g/-original-imahgfmzraymrnrg.jpeg?q=90"
            alt="Samsung"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/v/i/x/13-5g-i2401-iqoo-original-imah78r8nush2rep.jpeg?q=70"
            alt="Iqoo"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://image01.realme.net/general/20250523/1747980296019ddda3049836e42afb1f8ff9d41af0f24.png?width=1440&height=1440&size=444856"
            alt="Realme"
          />
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
