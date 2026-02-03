// src/components/Cart.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [address, setAddress] = useState({
    doorNo: "",
    street: "",
    area: "",
    district: "",
    state: "",
    country: "India",
    pincode: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Sync cart changes to localStorage
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
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + priceNum * qty;
  }, 0);

  // Validate address form
  const validateAddress = () => {
    const errors = {};
    if (!address.doorNo.trim()) errors.doorNo = "Door No is required";
    if (!address.street.trim()) errors.street = "Street name is required";
    if (!address.area.trim()) errors.area = "Area/Locality is required";
    if (!address.district.trim()) errors.district = "District is required";
    if (!address.state.trim()) errors.state = "State is required";
    if (!address.country.trim()) errors.country = "Country is required";
    if (!address.pincode.trim()) {
      errors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(address.pincode.trim())) {
      errors.pincode = "Pincode must be 6 digits";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle placing the order
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!validateAddress()) {
      alert("Please fill all required address fields correctly");
      return;
    }

    // Save order to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      items: cartItems.map((item) => ({
        brand: item.brand,
        model: item.model,
        price: item.price,
        image: item.image,
        quantity: item.quantity || 1,
      })),
      total: totalPrice,
      address: { ...address },
      date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      status: "Processing",
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // Clear cart
    setCartItems([]);
    localStorage.removeItem("cart");

    // Reset form and close
    setShowCheckoutForm(false);
    setAddress({
      doorNo: "",
      street: "",
      area: "",
      district: "",
      state: "",
      country: "India",
      pincode: "",
    });

    alert("Order placed successfully! You can view it in 'My Orders'.");
  };

  return (
    <div style={{ padding: "3rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2.5rem", color: "#1e293b" }}>
        My Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "5rem 1rem",
            background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            border: "1px solid #e2e8f0",
          }}
        >
          {/* Big empty cart icon */}
          <div style={{ fontSize: "8rem", color: "#94a3b8", marginBottom: "1.5rem" }}>
            <i className="fas fa-shopping-cart"></i>
          </div>

          <h2 style={{ fontSize: "2rem", color: "#1e293b", marginBottom: "1rem" }}>
            Your cart is empty
          </h2>

          <p style={{
            fontSize: "1.2rem",
            color: "#64748b",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}>
            Looks like you haven't added any products yet.<br />
            Explore our latest collection of Vivo, Oppo, iQOO, Samsung & Realme smartphones!
          </p>

          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "16px 48px",
              background: "#3b82f6",
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "600",
              borderRadius: "12px",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(59,130,246,0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#2563eb";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#3b82f6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start Shopping Now →
          </Link>

          <p style={{ marginTop: "2.5rem", fontSize: "1rem", color: "#94a3b8" }}>
            Popular brands: Vivo • Oppo • iQOO • Samsung • Realme
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          {cartItems.map((item, index) => {
            const quantity = item.quantity || 1;
            const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  marginBottom: "1.5rem",
                  background: "#ffffff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.model}
                  style={{
                    width: "140px",
                    height: "140px",
                    objectFit: "contain",
                    marginRight: "2rem",
                    borderRadius: "10px",
                    border: "1px solid #e5e7eb",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 0.6rem 0", fontSize: "1.5rem" }}>
                    {item.brand} {item.model}
                  </h3>

                  <div
                    style={{
                      fontSize: "2.1rem",
                      fontWeight: "bold",
                      color: "#c0392b",
                      margin: "0.8rem 0",
                    }}
                  >
                    ₹{(priceNum * quantity).toLocaleString("en-IN")}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", margin: "1.2rem 0" }}>
                    <button
                      onClick={() => decreaseQuantity(index)}
                      disabled={quantity <= 1}
                      style={{
                        padding: "10px 18px",
                        fontSize: "1.4rem",
                        background: quantity <= 1 ? "#e2e8f0" : "#3b82f6",
                        color: "white",
                        border: "none",
                        borderRadius: "8px 0 0 8px",
                        cursor: quantity <= 1 ? "not-allowed" : "pointer",
                        minWidth: "60px",
                      }}
                    >
                      −
                    </button>

                    <span
                      style={{
                        padding: "10px 24px",
                        fontSize: "1.4rem",
                        borderTop: "1px solid #e2e8f0",
                        borderBottom: "1px solid #e2e8f0",
                        minWidth: "70px",
                        textAlign: "center",
                        background: "#fff",
                      }}
                    >
                      {quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(index)}
                      style={{
                        padding: "10px 18px",
                        fontSize: "1.4rem",
                        background: "#3b82f6",
                        color: "white",
                        border: "none",
                        borderRadius: "0 8px 8px 0",
                        cursor: "pointer",
                        minWidth: "60px",
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(index)}
                    style={{
                      padding: "10px 20px",
                      background: "#ef4444",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontSize: "1rem",
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}

          {/* Total & Checkout */}
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "#f8fafc",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              textAlign: "right",
            }}
          >
            <h2 style={{ margin: "0 0 1.2rem 0", fontSize: "2.2rem", color: "#1e293b" }}>
              Total Amount: ₹{totalPrice.toLocaleString("en-IN")}
            </h2>

            <button
              onClick={() => setShowCheckoutForm(true)}
              style={{
                padding: "16px 48px",
                fontSize: "1.25rem",
                background: "#10b981",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
                boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
              }}
            >
              Proceed to Checkout
            </button>
          </div>

          {/* Shipping Address Form */}
          {showCheckoutForm && (
            <div
              style={{
                marginTop: "3rem",
                padding: "2.5rem",
                background: "#ffffff",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>
                Shipping Address
              </h2>

              <form onSubmit={handlePlaceOrder}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.4rem" }}>
                  <div>
                    <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem" }}>
                      Door No / Flat No *
                    </label>
                    <input
                      type="text"
                      value={address.doorNo}
                      onChange={(e) => setAddress({ ...address, doorNo: e.target.value })}
                      style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db" }}
                      required
                    />
                    {formErrors.doorNo && <small style={{ color: "red" }}>{formErrors.doorNo}</small>}
                  </div>

                  <div>
                    <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem" }}>
                      Street Name / Road *
                    </label>
                    <input
                      type="text"
                      value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db" }}
                      required
                    />
                    {formErrors.street && <small style={{ color: "red" }}>{formErrors.street}</small>}
                  </div>

                  <div>
                    <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem" }}>
                      Area / Locality / Village *
                    </label>
                    <input
                      type="text"
                      value={address.area}
                      onChange={(e) => setAddress({ ...address, area: e.target.value })}
                      style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db" }}
                      required
                    />
                    {formErrors.area && <small style={{ color: "red" }}>{formErrors.area}</small>}
                  </div>

                  <div>
                    <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem" }}>
                      District *
                    </label>
                    <input
                      type="text"
                      value={address.district}
                      onChange={(e) => setAddress({ ...address, district: e.target.value })}
                      style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db" }}
                      required
                    />
                    {formErrors.district && <small style={{ color: "red" }}>{formErrors.district}</small>}
                  </div>

                  <div>
                    <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem" }}>
                      State *
                    </label>
                    <input
                      type="text"
                      value={address.state}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db" }}
                      required
                    />
                    {formErrors.state && <small style={{ color: "red" }}>{formErrors.state}</small>}
                  </div>

                  <div>
                    <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem" }}>
                      Country *
                    </label>
                    <input
                      type="text"
                      value={address.country}
                      onChange={(e) => setAddress({ ...address, country: e.target.value })}
                      style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db" }}
                      required
                    />
                    {formErrors.country && <small style={{ color: "red" }}>{formErrors.country}</small>}
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem" }}>
                      Pincode *
                    </label>
                    <input
                      type="text"
                      value={address.pincode}
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                      maxLength={6}
                      style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db" }}
                      required
                    />
                    {formErrors.pincode && <small style={{ color: "red" }}>{formErrors.pincode}</small>}
                  </div>
                </div>

                <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
                  <button
                    type="submit"
                    style={{
                      padding: "16px 48px",
                      fontSize: "1.2rem",
                      background: "#e67e22",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Place Order
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowCheckoutForm(false)}
                    style={{
                      padding: "16px 48px",
                      fontSize: "1.2rem",
                      background: "#6b7280",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      marginLeft: "1.5rem",
                      cursor: "pointer",
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
