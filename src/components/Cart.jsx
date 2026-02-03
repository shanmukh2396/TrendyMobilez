// src/components/Cart.jsx
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Increase quantity
  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCartItems(updatedCart);
  };

  // Decrease quantity (minimum 1)
  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  // Remove item from cart
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => {
    const qty = item.quantity || 1;
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, "")); // remove ₹ symbol
    return sum + priceNum * qty;
  }, 0);

  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>My Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "1.2rem", color: "#666" }}>
          <p>Your cart is empty.</p>
          <p>Start shopping now!</p>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => {
            const quantity = item.quantity || 1;
            const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "1.2rem",
                  marginBottom: "1.2rem",
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.model}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    marginRight: "1.5rem",
                    borderRadius: "8px",
                  }}
                />

                {/* Details */}
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 0.5rem 0" }}>
                    {item.brand} {item.model}
                  </h3>
                  <p style={{ margin: "0.3rem 0", fontSize: "1.4rem", fontWeight: "bold", color: "#e74c3c" }}>
                    ₹{(priceNum * quantity).toLocaleString("en-IN")}
                  </p>

                  {/* Quantity Controls */}
                  <div style={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
                    <button
                      onClick={() => decreaseQuantity(index)}
                      disabled={quantity <= 1}
                      style={{
                        padding: "8px 14px",
                        fontSize: "1.1rem",
                        background: quantity <= 1 ? "#eee" : "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "6px 0 0 6px",
                        cursor: quantity <= 1 ? "not-allowed" : "pointer",
                      }}
                    >
                      -
                    </button>
                    <span
                      style={{
                        padding: "8px 16px",
                        fontSize: "1.1rem",
                        borderTop: "1px solid #ddd",
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      {quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(index)}
                      style={{
                        padding: "8px 14px",
                        fontSize: "1.1rem",
                        background: "#3498db",
                        color: "white",
                        border: "none",
                        borderRadius: "0 6px 6px 0",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(index)}
                    style={{
                      padding: "6px 14px",
                      background: "#e74c3c",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

          {/* Total Section */}
          <div
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              background: "#f8f9fa",
              borderRadius: "10px",
              textAlign: "right",
            }}
          >
            <h2 style={{ margin: "0 0 0.8rem 0" }}>
              Total: ₹{totalPrice.toLocaleString("en-IN")}
            </h2>
            <button
              style={{
                padding: "12px 28px",
                fontSize: "1.1rem",
                background: "#27ae60",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
