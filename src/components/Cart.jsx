// src/components/Cart.jsx
import React, { useState, useEffect } from "react";

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

  // Sync cart to localStorage whenever it changes
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

  // Remove item
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

  // Handle form submission (Place Order)
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

    alert("Order placed successfully! Check 'My Orders' page.");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>My Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "1.3rem", color: "#555" }}>
          <p>Your cart is empty.</p>
          <p>Start adding some amazing mobiles!</p>
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
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  padding: "1.2rem",
                  marginBottom: "1.5rem",
                  background: "#ffffff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.model}
                  style={{
                    width: "140px",
                    height: "140px",
                    objectFit: "contain",
                    marginRight: "1.8rem",
                    borderRadius: "8px",
                    border: "1px solid #eee",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 0.6rem 0", fontSize: "1.4rem" }}>
                    {item.brand} {item.model}
                  </h3>

                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#c0392b",
                      margin: "0.8rem 0",
                    }}
                  >
                    ₹{(priceNum * quantity).toLocaleString("en-IN")}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
                    <button
                      onClick={() => decreaseQuantity(index)}
                      disabled={quantity <= 1}
                      style={{
                        padding: "10px 16px",
                        fontSize: "1.3rem",
                        background: quantity <= 1 ? "#f0f0f0" : "#3498db",
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
                        padding: "10px 20px",
                        fontSize: "1.3rem",
                        borderTop: "1px solid #ddd",
                        borderBottom: "1px solid #ddd",
                        minWidth: "60px",
                        textAlign: "center",
                      }}
                    >
                      {quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(index)}
                      style={{
                        padding: "10px 16px",
                        fontSize: "1.3rem",
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

                  <button
                    onClick={() => removeItem(index)}
                    style={{
                      padding: "8px 16px",
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

          {/* Total & Checkout */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.8rem",
              background: "#f8f9fa",
              borderRadius: "12px",
              textAlign: "right",
              border: "1px solid #e0e0e0",
            }}
          >
            <h2 style={{ margin: "0 0 1rem 0", fontSize: "2rem" }}>
              Total Amount: ₹{totalPrice.toLocaleString("en-IN")}
            </h2>

            <button
              onClick={() => setShowCheckoutForm(true)}
              style={{
                padding: "14px 40px",
                fontSize: "1.2rem",
                background: "#27ae60",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Proceed to Checkout
            </button>
          </div>

          {/* Checkout Form */}
          {showCheckoutForm && (
            <div
              style={{
                marginTop: "2.5rem",
                padding: "2rem",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                Shipping Address
              </h2>

              <form onSubmit={handlePlaceOrder}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
                  <div>
                    <label>Door No / Flat No *</label>
                    <input
                      type="text"
                      value={address.doorNo}
                      onChange={(e) => setAddress({ ...address, doorNo: e.target.value })}
                      style={{ width: "100%", padding: "10px", marginTop: "6px" }}
                      required
                    />
                    {formErrors.doorNo && <small style={{ color: "red" }}>{formErrors.doorNo}</small>}
                  </div>

                  <div>
                    <label>Street Name / Road *</label>
                    <input
                      type="text"
                      value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      style={{ width: "100%", padding: "10px", marginTop: "6px" }}
                      required
                    />
                    {formErrors.street && <small style={{ color: "red" }}>{formErrors.street}</small>}
                  </div>

                  <div>
                    <label>Area / Locality / Village *</label>
                    <input
                      type="text"
                      value={address.area}
                      onChange={(e) => setAddress({ ...address, area: e.target.value })}
                      style={{ width: "100%", padding: "10px", marginTop: "6px" }}
                      required
                    />
                    {formErrors.area && <small style={{ color: "red" }}>{formErrors.area}</small>}
                  </div>

                  <div>
                    <label>District *</label>
                    <input
                      type="text"
                      value={address.district}
                      onChange={(e) => setAddress({ ...address, district: e.target.value })}
                      style={{ width: "100%", padding: "10px", marginTop: "6px" }}
                      required
                    />
                    {formErrors.district && <small style={{ color: "red" }}>{formErrors.district}</small>}
                  </div>

                  <div>
                    <label>State *</label>
                    <input
                      type="text"
                      value={address.state}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      style={{ width: "100%", padding: "10px", marginTop: "6px" }}
                      required
                    />
                    {formErrors.state && <small style={{ color: "red" }}>{formErrors.state}</small>}
                  </div>

                  <div>
                    <label>Country *</label>
                    <input
                      type="text"
                      value={address.country}
                      onChange={(e) => setAddress({ ...address, country: e.target.value })}
                      style={{ width: "100%", padding: "10px", marginTop: "6px" }}
                      required
                    />
                    {formErrors.country && <small style={{ color: "red" }}>{formErrors.country}</small>}
                  </div>

                  <div style={{ gridColumn: "1 / -1" }}>
                    <label>Pincode *</label>
                    <input
                      type="text"
                      value={address.pincode}
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                      maxLength={6}
                      style={{ width: "100%", padding: "10px", marginTop: "6px" }}
                      required
                    />
                    {formErrors.pincode && <small style={{ color: "red" }}>{formErrors.pincode}</small>}
                  </div>
                </div>

                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                  <button
                    type="submit"
                    style={{
                      padding: "14px 40px",
                      fontSize: "1.1rem",
                      background: "#e67e22",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Place Order
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowCheckoutForm(false)}
                    style={{
                      padding: "14px 40px",
                      fontSize: "1.1rem",
                      background: "#95a5a6",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      marginLeft: "1rem",
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
