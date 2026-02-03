import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Generic ProductPage component (reusable for all models)
const ProductPage = ({ brand, model, price, image }) => {
  const navigate = useNavigate();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState("");

  const isLoggedIn = !!localStorage.getItem("username");

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // Add to cart logic (using localStorage)
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ brand, model, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${model} added to cart!`);
  };

  const handleBuyNow = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    setShowAddressForm(true);
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    // Simulate purchase (you can add backend call later)
    alert(`Order placed for ${model} at address: ${address}`);
    setShowAddressForm(false);
    setAddress("");
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Image on left */}
      <div style={{ flex: "1", marginRight: "2rem" }}>
        <img
          src={image}
          alt={`${brand} ${model}`}
          style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
        />
      </div>

      {/* Description on right */}
      <div style={{ flex: "1" }}>
        <h1>
          {brand} {model}
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#e74c3c", fontWeight: "bold" }}>
          {price}
        </p>
        <p>
          Description: This is a high-performance smartphone with advanced
          camera, long battery life, and fast charging. It features a stunning
          display and powerful processor. (Placeholder - replace with real desc)
        </p>

        <div style={{ marginTop: "1.5rem" }}>
          <button
            onClick={handleAddToCart}
            style={{
              padding: "0.8rem 1.5rem",
              background: "#3498db",
              color: "white",
              border: "none",
              marginRight: "1rem",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            style={{
              padding: "0.8rem 1.5rem",
              background: "#27ae60",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>

        {showAddressForm && (
          <form onSubmit={handleSubmitAddress} style={{ marginTop: "2rem" }}>
            <h3>Enter Shipping Address</h3>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your full address"
              style={{ width: "100%", height: "100px", padding: "0.5rem" }}
              required
            />
            <button
              type="submit"
              style={{
                padding: "0.8rem 1.5rem",
                background: "#f39c12",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginTop: "1rem",
              }}
            >
              Confirm Order
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

// Individual pages (export one for each model - use dynamic routing in App.jsx for efficiency)
export const VivoX200 = () => (
  <ProductPage
    brand="Vivo"
    model="X200"
    price="₹54,999"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51cmWA2a0s1QLy46Innd_uMV0QsXi6bNo9g&s"
  />
);
export const VivoX200Pro = () => (
  <ProductPage
    brand="Vivo"
    model="X200 Pro"
    price="₹69,999"
    image="https://m.media-amazon.com/images/I/71chuQByj0L.jpg"
  />
);
export const VivoV40Pro = () => (
  <ProductPage
    brand="Vivo"
    model="V40 Pro"
    price="₹44,999"
    image="https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/vivo-v40-pro-5g-ganges-blue-512gb-12gb-ram-front-back-view.png"
  />
);
export const VivoT35G = () => (
  <ProductPage
    brand="Vivo"
    model="T3 5G"
    price="₹19,999"
    image="https://img-prd-pim.poorvika.com/product/vivo-t3-5g-crystal-flake-128gb-8gb-ram-front-back-view-model-view.png"
  />
);
export const VivoY200e = () => (
  <ProductPage
    brand="Vivo"
    model="Y200e"
    price="₹21,999"
    image="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1715668614449/zip/img/webp/vivo-y100-5g-mobile-in.jpg.webp"
  />
);
export const VivoS19 = () => (
  <ProductPage
    brand="Vivo"
    model="S19"
    price="₹32,999"
    image="https://qonooz.com/wp-content/uploads/2024/07/vivo_s19_pro-.png"
  />
);

// Oppo
export const OppoReno12Pro = () => (
  <ProductPage
    brand="Oppo"
    model="Reno 12 Pro"
    price="₹42,999"
    image="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/p/v/p/-original-imah3cmbhgfymupr.jpeg?q=90"
  />
);
export const OppoFindX8 = () => (
  <ProductPage
    brand="Oppo"
    model="Find X8"
    price="₹79,999"
    image="https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x8-series/en/oppo-find-x8/main/assets/images-color-b-1-mo.png"
  />
);
export const OppoReno115G = () => (
  <ProductPage
    brand="Oppo"
    model="Reno 11 5G"
    price="₹36,999"
    image="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/g/u/d/reno-11-5g-cph2599-oppo-original-imagwxdsh2zjfpdt.jpeg?q=90"
  />
);
export const OppoA3Pro = () => (
  <ProductPage
    brand="Oppo"
    model="A3 Pro"
    price="₹19,999"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeWCiE4-O-LI_sESoSpQwxtmUMx6F6ojHRA&s"
  />
);
export const OppoF27ProPlus = () => (
  <ProductPage
    brand="Oppo"
    model="F27 Pro+"
    price="₹32,999"
    image="https://m.media-amazon.com/images/I/91AnvgyG1sL.jpg"
  />
);
export const OppoK12x = () => (
  <ProductPage
    brand="Oppo"
    model="K12x"
    price="₹16,999"
    image="https://m.media-amazon.com/images/I/51oDDYRMifL.jpg"
  />
);

// iQOO
export const IQOO13 = () => (
  <ProductPage
    brand="iQOO"
    model="13"
    price="₹54,999"
    image="https://rukmini1.flixcart.com/image/1500/1500/xif0q/mobile/v/i/x/13-5g-i2401-iqoo-original-imah78r8nush2rep.jpeg?q=70"
  />
);
export const IQOONeo10 = () => (
  <ProductPage
    brand="iQOO"
    model="Neo 10"
    price="₹31,999"
    image="https://m.media-amazon.com/images/I/610ELrtuHEL._AC_UF1000,1000_QL80_.jpg"
  />
);
export const IQOOZ9Turbo = () => (
  <ProductPage
    brand="iQOO"
    model="Z9 Turbo"
    price="₹24,999"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4myi9HukArlUfp_C7vlKnFxnl381vgexduA&s"
  />
);
export const IQOO12 = () => (
  <ProductPage
    brand="iQOO"
    model="12"
    price="₹52,999"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzlldmslmf2qbaOAvsCdsRVF1mHJjyPhYSg&s"
  />
);
export const IQOONeo9Pro = () => (
  <ProductPage
    brand="iQOO"
    model="Neo 9 Pro"
    price="₹34,999"
    image="https://m.media-amazon.com/images/I/718jcIFYaAL.jpg"
  />
);
export const IQOOZ9sPro = () => (
  <ProductPage
    brand="iQOO"
    model="Z9s Pro"
    price="₹26,999"
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3KxFgv2foyN2SCR7yMbTr1n7Q5Oa16eDL9A&s"
  />
);

// Samsung
export const SamsungGalaxyS25Ultra = () => (
  <ProductPage
    brand="Samsung"
    model="Galaxy S25 Ultra"
    price="₹1,29,999"
    image="https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/i/s/g/-original-imahgfmzraymrnrg.jpeg?q=90"
  />
);
export const SamsungGalaxyS25 = () => (
  <ProductPage
    brand="Samsung"
    model="Galaxy S25"
    price="₹79,999"
    image="https://m.media-amazon.com/images/I/61D3EdXKG5L.jpg"
  />
);
export const SamsungGalaxyA56 = () => (
  <ProductPage
    brand="Samsung"
    model="Galaxy A56"
    price="₹38,999"
    image="https://images.samsung.com/is/image/samsung/p6pim/levant/sm-a566bzavmea/gallery/levant-galaxy-a56-5g-sm-a566-sm-a566bzavmea-545295478?$Q90_1248_936_F_PNG$"
  />
);
export const SamsungGalaxyM55 = () => (
  <ProductPage
    brand="Samsung"
    model="Galaxy M55"
    price="₹26,999"
    image="https://m.media-amazon.com/images/I/41bbNrwkZUL._QL92_SH45_SS200_.jpg"
  />
);
export const SamsungGalaxyF55 = () => (
  <ProductPage
    brand="Samsung"
    model="Galaxy F55"
    price="₹27,999"
    image="https://m.media-amazon.com/images/I/71qq0q4EIzL._AC_UF1000,1000_QL80_.jpg"
  />
);
export const SamsungGalaxyA35 = () => (
  <ProductPage
    brand="Samsung"
    model="Galaxy A35"
    price="₹27,999"
    image="https://m.media-amazon.com/images/I/51VfGGh7quL.jpg"
  />
);

// Realme
export const RealmeGT7Pro = () => (
  <ProductPage
    brand="Realme"
    model="GT 7 Pro"
    price="₹54,999"
    image="https://image01.realme.net/general/20250523/1747980296019ddda3049836e42afb1f8ff9d41af0f24.png?width=1440&height=1440&size=444856"
  />
);
export const Realme14ProPlus = () => (
  <ProductPage
    brand="Realme"
    model="14 Pro+"
    price="₹34,999"
    image="https://gadget.jagatreview.com/wp-content/uploads/2025/01/realme-14-pro-plus.webp"
  />
);
export const RealmeNarzo80Pro = () => (
  <ProductPage
    brand="Realme"
    model="Narzo 80 Pro"
    price="₹24,999"
    image="https://www.mobiledokan.com/media/realme-narzo-80-pro-racing-green-official-image_1.webp"
  />
);
export const RealmeP3Ultra = () => (
  <ProductPage
    brand="Realme"
    model="P3 Ultra"
    price="₹22,999"
    image="https://www.mobiledokan.com/media/realme-p3-ultra-neptune-blue-official-image.webp"
  />
);
export const Realme13Plus5G = () => (
  <ProductPage
    brand="Realme"
    model="13+ 5G"
    price="₹22,999"
    image="https://gagadget.com/media/post_big/gsmarena_003_2.jpg"
  />
);
export const RealmeC75 = () => (
  <ProductPage
    brand="Realme"
    model="C75"
    price="₹12,999"
    image="https://static2.realme.net/images/realme-c75/1731918291399b80cf3282a6f409c9034318e0ad5291c.jpg"
  />
);
