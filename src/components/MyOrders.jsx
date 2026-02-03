// src/components/MyOrders.jsx
import React from "react";

const MyOrders = () => {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>My Orders</h1>

      {orders.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "1.3rem", color: "#555" }}>
          <p>No orders placed yet.</p>
          <p>Start shopping now!</p>
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "1.5rem",
              marginBottom: "2rem",
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <h3 style={{ margin: 0 }}>
                Order #{order.id.toString().slice(-6)}
              </h3>
              <span style={{ color: "#27ae60", fontWeight: "bold" }}>{order.status}</span>
            </div>

            <p style={{ margin: "0.5rem 0" }}>
              <strong>Date:</strong> {order.date}
            </p>

            <p style={{ margin: "0.5rem 0" }}>
              <strong>Total:</strong> ₹{order.total.toLocaleString("en-IN")}
            </p>

            <p style={{ margin: "1rem 0 0.5rem 0", fontWeight: "bold" }}>Shipping Address:</p>
            <p style={{ margin: "0.3rem 0" }}>
              {order.address.doorNo}, {order.address.street}
            </p>
            <p style={{ margin: "0.3rem 0" }}>
              {order.address.area}, {order.address.district}
            </p>
            <p style={{ margin: "0.3rem 0" }}>
              {order.address.state}, {order.address.country} - {order.address.pincode}
            </p>

            <hr style={{ margin: "1.5rem 0" }} />

            <h4 style={{ marginBottom: "1rem" }}>Items</h4>
            {order.items.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                  padding: "0.8rem",
                  background: "#f9f9f9",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.model}
                  style={{ width: "80px", height: "80px", objectFit: "contain", marginRight: "1rem" }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    {item.brand} {item.model}
                  </p>
                  <p style={{ margin: "0.3rem 0" }}>
                    Qty: {item.quantity} × {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;
