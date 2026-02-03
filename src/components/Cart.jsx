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

  // Sync cart changes to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Quantity controls
  const increaseQuantity = (index) => {
    const updated = [...cartItems];
    updated[index].quantity = (updated[index].quantity || 1) + 1;
    setCartItems(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = [...cartItems];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCartItems(updated);
    }
  };

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const qty = item.quantity || 1;
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + priceNum * qty;
  }, 0);

  const validateAddress = () => {
    const errors = {};
    if (!address.doorNo.trim()) errors.doorNo = "Door No is required";
    if (!address.street.trim()) errors.street = "Street is required";
    if (!address.area.trim()) errors.area = "Area is required";
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

  // This is the function that runs on form submit
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!validateAddress()) {
      alert("Please fill all required fields correctly");
      return;
    }

    // Save order
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      id: Date.now(),
      items: cartItems.map(item => ({
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

    // Reset & close form
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
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>My Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "1.3rem", color: "#555" }}>
          <p>Your cart is empty.</p>
          <p>Start adding some amazing mobiles!</p>
        </div>
      ) : (
        <>
          {/* Cart items */}
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
                {/* ... rest of item rendering same as before ... */}
                <img src={item.image} alt={item.model} style={{ width: "140px", height: "140px", objectFit: "contain", marginRight: "1.8rem" }} />
                <div style={{ flex: 1 }}>
                  <h3>{item.brand} {item.model}</h3>
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#c0392b" }}>
                    ₹{(priceNum * quantity).toLocaleString("en-IN")}
                  </div>
                  {/* Quantity buttons */}
                  <div style={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
                    <button onClick={() => decreaseQuantity(index)} disabled={quantity <= 1}>- </button>
                    <span style={{ padding: "0 1rem" }}>{quantity}</span>
                    <button onClick={() => increaseQuantity(index)}>+</button>
                  </div>
                  <button onClick={() => removeItem(index)} style={{ background: "#e74c3c", color: "white" }}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

          {/* Total */}
          <div style={{ textAlign: "right", marginTop: "2rem" }}>
            <h2>Total: ₹{totalPrice.toLocaleString("en-IN")}</h2>
            <button
              type="button"   // ← important: this is NOT submit
              onClick={() => setShowCheckoutForm(true)}
              style={{ padding: "12px 30px", background: "#27ae60", color: "white", border: "none" }}
            >
              Proceed to Checkout
            </button>
          </div>

          {/* Checkout Form */}
          {showCheckoutForm && (
            <form onSubmit={handlePlaceOrder} style={{ marginTop: "3rem", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
              <h2 style={{ textAlign: "center" }}>Shipping Address</h2>

              {/* Form fields */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label>Door No / Flat No *</label>
                  <input
                    value={address.doorNo}
                    onChange={(e) => setAddress({ ...address, doorNo: e.target.value })}
                    required
                  />
                  {formErrors.doorNo && <small style={{ color: "red" }}>{formErrors.doorNo}</small>}
                </div>

                {/* Add other fields similarly - street, area, district, state, country, pincode */}
                {/* ... (copy-paste the rest from previous version) ... */}
              </div>

              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <button
                  type="submit"   // ← this MUST be type="submit"
                  style={{ padding: "12px 40px", background: "#e67e22", color: "white", border: "none" }}
                >
                  Place Order
                </button>

                <button
                  type="button"
                  onClick={() => setShowCheckoutForm(false)}
                  style={{ marginLeft: "1rem", padding: "12px 40px", background: "#95a5a6", color: "white" }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
