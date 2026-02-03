import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

const CardSlider = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 fw-bold">Latest Mobiles by Brand</h1>

      {/* ======================= VIVO SECTION ======================= */}
      <section className="mb-5">
        <h2 className="text-center mb-4 text-primary">Vivo Mobiles</h2>
        <div
          id="vivoCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51cmWA2a0s1QLy46Innd_uMV0QsXi6bNo9g&s"
                      className="card-img-top"
                      alt="Vivo X200"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Vivo X200</h5>
                      <p className="card-text fw-bold text-muted">₹54,999</p>
                      <Link to="/vivo-x200" className="btn btn-primary mt-auto">
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/71chuQByj0L.jpg"
                      className="card-img-top"
                      alt="Vivo X200 Pro"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Vivo X200 Pro</h5>
                      <p className="card-text fw-bold text-muted">₹69,999</p>
                      <Link
                        to="/vivo-x200-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/vivo-v40-pro-5g-ganges-blue-512gb-12gb-ram-front-back-view.png"
                      className="card-img-top"
                      alt="Vivo V40 Pro"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Vivo V40 Pro</h5>
                      <p className="card-text fw-bold text-muted">₹44,999</p>
                      <Link
                        to="/vivo-v40-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://img-prd-pim.poorvika.com/product/vivo-t3-5g-crystal-flake-128gb-8gb-ram-front-back-view-model-view.png"
                      className="card-img-top"
                      alt="Vivo T3 5G"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Vivo T3 5G</h5>
                      <p className="card-text fw-bold text-muted">₹19,999</p>
                      <Link
                        to="/vivo-t3-5g"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1715668614449/zip/img/webp/vivo-y100-5g-mobile-in.jpg.webp"
                      className="card-img-top"
                      alt="Vivo Y200e"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Vivo Y200e</h5>
                      <p className="card-text fw-bold text-muted">₹21,999</p>
                      <Link
                        to="/vivo-y200e"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://qonooz.com/wp-content/uploads/2024/07/vivo_s19_pro-.png"
                      className="card-img-top"
                      alt="Vivo S19"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Vivo S19</h5>
                      <p className="card-text fw-bold text-muted">₹32,999</p>
                      <Link to="/vivo-s19" className="btn btn-primary mt-auto">
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#vivoCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#vivoCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* ======================= OPPO SECTION ======================= */}
      <section className="mb-5">
        <h2 className="text-center mb-4 text-success">OPPO Mobiles</h2>
        <div
          id="oppoCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/p/v/p/-original-imah3cmbhgfymupr.jpeg?q=90"
                      className="card-img-top"
                      alt="Oppo Reno 12 Pro"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Oppo Reno 12 Pro</h5>
                      <p className="card-text fw-bold text-muted">₹42,999</p>
                      <Link
                        to="/oppo-reno12-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x8-series/en/oppo-find-x8/main/assets/images-color-b-1-mo.png"
                      className="card-img-top"
                      alt="Oppo Find X8"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Oppo Find X8</h5>
                      <p className="card-text fw-bold text-muted">₹79,999</p>
                      <Link
                        to="/oppo-findx8"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/g/u/d/reno-11-5g-cph2599-oppo-original-imagwxdsh2zjfpdt.jpeg?q=90"
                      className="card-img-top"
                      alt="Oppo Reno 11 5G"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Oppo Reno 11 5G</h5>
                      <p className="card-text fw-bold text-muted">₹36,999</p>
                      <Link
                        to="/oppo-reno11-5g"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeWCiE4-O-LI_sESoSpQwxtmUMx6F6ojHRA&s"
                      className="card-img-top"
                      alt="Oppo A3 Pro"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Oppo A3 Pro</h5>
                      <p className="card-text fw-bold text-muted">₹19,999</p>
                      <Link
                        to="/oppo-a3-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/91AnvgyG1sL.jpg"
                      className="card-img-top"
                      alt="Oppo F27 Pro+"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Oppo F27 Pro+</h5>
                      <p className="card-text fw-bold text-muted">₹32,999</p>
                      <Link
                        to="/oppo-f27-pro-plus"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/51oDDYRMifL.jpg"
                      className="card-img-top"
                      alt="Oppo K12x"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Oppo K12x</h5>
                      <p className="card-text fw-bold text-muted">₹16,999</p>
                      <Link to="/oppo-k12x" className="btn btn-primary mt-auto">
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#oppoCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#oppoCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* ======================= iQOO SECTION ======================= */}
      <section className="mb-5">
        <h2 className="text-center mb-4 text-info">iQOO Mobiles</h2>
        <div
          id="iqooCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/v/i/x/13-5g-i2401-iqoo-original-imah78r8nush2rep.jpeg?q=70"
                      className="card-img-top"
                      alt="iQOO 13"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">iQOO 13</h5>
                      <p className="card-text fw-bold text-muted">₹54,999</p>
                      <Link to="/iqoo-13" className="btn btn-primary mt-auto">
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/610ELrtuHEL._AC_UF1000,1000_QL80_.jpg"
                      className="card-img-top"
                      alt="iQOO Neo 10"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">iQOO Neo 10</h5>
                      <p className="card-text fw-bold text-muted">₹31,999</p>
                      <Link
                        to="/iqoo-neo-10"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4myi9HukArlUfp_C7vlKnFxnl381vgexduA&s"
                      className="card-img-top"
                      alt="iQOO Z9 Turbo"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">iQOO Z9 Turbo</h5>
                      <p className="card-text fw-bold text-muted">₹24,999</p>
                      <Link
                        to="/iqoo-z9-turbo"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzlldmslmf2qbaOAvsCdsRVF1mHJjyPhYSg&s"
                      className="card-img-top"
                      alt="iQOO 12"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">iQOO 12</h5>
                      <p className="card-text fw-bold text-muted">₹52,999</p>
                      <Link to="/iqoo-12" className="btn btn-primary mt-auto">
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/718jcIFYaAL.jpg"
                      className="card-img-top"
                      alt="iQOO Neo 9 Pro"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">iQOO Neo 9 Pro</h5>
                      <p className="card-text fw-bold text-muted">₹34,999</p>
                      <Link
                        to="/iqoo-neo-9-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KxFgv2foyN2SCR7yMbTr1n7Q5Oa16eDL9A&s"
                      className="card-img-top"
                      alt="iQOO Z9s Pro"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">iQOO Z9s Pro</h5>
                      <p className="card-text fw-bold text-muted">₹26,999</p>
                      <Link
                        to="/iqoo-z9s-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#iqooCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#iqooCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* ======================= SAMSUNG SECTION ======================= */}
      <section className="mb-5">
        <h2 className="text-center mb-4 text-warning">Samsung Mobiles</h2>
        <div
          id="samsungCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/i/s/g/-original-imahgfmzraymrnrg.jpeg?q=90"
                      className="card-img-top"
                      alt="Samsung Galaxy S25 Ultra"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Galaxy S25 Ultra</h5>
                      <p className="card-text fw-bold text-muted">₹1,29,999</p>
                      <Link
                        to="/samsung-galaxy-s25-ultra"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/61D3EdXKG5L.jpg"
                      className="card-img-top"
                      alt="Samsung Galaxy S25"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Galaxy S25</h5>
                      <p className="card-text fw-bold text-muted">₹79,999</p>
                      <Link
                        to="/samsung-galaxy-s25"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a566bzavmea/gallery/levant-galaxy-a56-5g-sm-a566-sm-a566bzavmea-545295478?$Q90_1248_936_F_PNG$"
                      className="card-img-top"
                      alt="Samsung Galaxy A56"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Galaxy A56</h5>
                      <p className="card-text fw-bold text-muted">₹38,999</p>
                      <Link
                        to="/samsung-galaxy-a56"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/41bbNrwkZUL._QL92_SH45_SS200_.jpg"
                      className="card-img-top"
                      alt="Samsung Galaxy M55"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Galaxy M55</h5>
                      <p className="card-text fw-bold text-muted">₹26,999</p>
                      <Link
                        to="/samsung-galaxy-m55"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/71qq0q4EIzL._AC_UF1000,1000_QL80_.jpg"
                      className="card-img-top"
                      alt="Samsung Galaxy F55"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Galaxy F55</h5>
                      <p className="card-text fw-bold text-muted">₹27,999</p>
                      <Link
                        to="/samsung-galaxy-f55"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://m.media-amazon.com/images/I/51VfGGh7quL.jpg"
                      className="card-img-top"
                      alt="Samsung Galaxy A35"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Galaxy A35</h5>
                      <p className="card-text fw-bold text-muted">₹27,999</p>
                      <Link
                        to="/samsung-galaxy-a35"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#samsungCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#samsungCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* ======================= REALME SECTION ======================= */}
      <section className="mb-5">
        <h2 className="text-center mb-4 text-danger">Realme Mobiles</h2>
        <div
          id="realmeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://image01.realme.net/general/20250523/1747980296019ddda3049836e42afb1f8ff9d41af0f24.png?width=1440&height=1440&size=444856"
                      className="card-img-top"
                      alt="Realme GT 7 Pro"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Realme GT 7 Pro</h5>
                      <p className="card-text fw-bold text-muted">₹54,999</p>
                      <Link
                        to="/realme-gt-7-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://gadget.jagatreview.com/wp-content/uploads/2025/01/realme-14-pro-plus.webp"
                      className="card-img-top"
                      alt="Realme 14 Pro+"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Realme 14 Pro+</h5>
                      <p className="card-text fw-bold text-muted">₹34,999</p>
                      <Link
                        to="/realme-14-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://www.mobiledokan.com/media/realme-narzo-80-pro-racing-green-official-image_1.webp"
                      className="card-img-top"
                      alt="Realme Narzo 80 Pro"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Realme Narzo 80 Pro</h5>
                      <p className="card-text fw-bold text-muted">₹24,999</p>
                      <Link
                        to="/realme-narzo-80-pro"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://www.mobiledokan.com/media/realme-p3-ultra-neptune-blue-official-image.webp"
                      className="card-img-top"
                      alt="Realme P3 Ultra"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Realme P3 Ultra</h5>
                      <p className="card-text fw-bold text-muted">₹22,999</p>
                      <Link
                        to="/realme-p3-ultra"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://gagadget.com/media/post_big/gsmarena_003_2.jpg"
                      className="card-img-top"
                      alt="Realme 13+ 5G"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Realme 13+ 5G</h5>
                      <p className="card-text fw-bold text-muted">₹22,999</p>
                      <Link
                        to="/realme-13-plus-5g"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src="https://static2.realme.net/images/realme-c75/1731918291399b80cf3282a6f409c9034318e0ad5291c.jpg"
                      className="card-img-top"
                      alt="Realme C75"
                      style={{ height: "400px", objectFit: "fill" }}
                    />
                    <div className="card-body text-center d-flex flex-column">
                      <h5 className="card-title">Realme C75</h5>
                      <p className="card-text fw-bold text-muted">₹12,999</p>
                      <Link
                        to="/realme-c75"
                        className="btn btn-primary mt-auto"
                      >
                        View more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#realmeCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#realmeCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CardSlider;
