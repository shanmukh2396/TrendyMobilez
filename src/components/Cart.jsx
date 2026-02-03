import React from "react";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <img src={item.image} alt={item.model} style={{ width: "100px" }} />
            <h3>
              {item.brand} {item.model}
            </h3>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
