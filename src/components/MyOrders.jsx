// src/components/MyOrders.jsx
import React from "react";

const MyOrders = () => {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  if (orders.length === 0) {
    return (
      <div style={{
        padding: "4rem 2rem",
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#555",
      }}>
        <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem", color: "#333" }}>
          My Orders
        </h1>
        <div style={{
          fontSize: "1.3rem",
          marginBottom: "2rem",
          maxWidth: "500px",
        }}>
          <p>You haven't placed any orders yet.</p>
          <p style={{ marginTop: "1rem" }}>
            Start shopping and place your first order today!
          </p>
        </div>
        <button
          onClick={() => window.location.href = "/"}
          style={{
            padding: "12px 32px",
            fontSize: "1.1rem",
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div style={{
      padding: "2.5rem 1.5rem",
      maxWidth: "1100px",
      margin: "0 auto",
    }}>
      <h1 style={{
        textAlign: "center",
        fontSize: "2.2rem",
        marginBottom: "2.5rem",
        color: "#2c3e50",
      }}>
        My Orders
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>
        {orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #e0e7ff",
              borderRadius: "12px",
              overflow: "hidden",
              background: "white",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              transition: "box-shadow 0.2s",
            }}
          >
            {/* Order Header */}
            <div style={{
              padding: "1.2rem 1.5rem",
              background: "#f8f9ff",
              borderBottom: "1px solid #e0e7ff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.3rem", color: "#2c3e50" }}>
                  Order #{order.id.toString().slice(-8)}
                </h3>
                <p style={{ margin: "0.4rem 0 0", color: "#64748b", fontSize: "0.95rem" }}>
                  Placed on: {order.date}
                </p>
              </div>

              <div style={{
                padding: "6px 16px",
                background: order.status === "Delivered" ? "#d1fae5" : "#fef3c7",
                color: order.status === "Delivered" ? "#065f46" : "#92400e",
                borderRadius: "20px",
                fontSize: "0.95rem",
                fontWeight: "500",
              }}>
                {order.status}
              </div>
            </div>

            {/* Order Items */}
            <div style={{ padding: "1.5rem" }}>
              <h4 style={{
                margin: "0 0 1rem 0",
                fontSize: "1.15rem",
                color: "#374151",
              }}>
                Items ({order.items.length})
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.2rem",
                      padding: "1rem",
                      background: "#f9fafb",
                      borderRadius: "10px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.model}
                      style={{
                        width: "90px",
                        height: "90px",
                        objectFit: "contain",
                        borderRadius: "8px",
                        border: "1px solid #e5e7eb",
                      }}
                    />

                    <div style={{ flex: 1 }}>
                      <p style={{ margin: "0 0 0.4rem 0", fontWeight: "500" }}>
                        {item.brand} {item.model}
                      </p>
                      <p style={{ margin: 0, color: "#4b5563", fontSize: "0.95rem" }}>
                        Qty: {item.quantity} × {item.price}
                      </p>
                    </div>

                    <div style={{
                      fontWeight: "600",
                      color: "#111827",
                      minWidth: "100px",
                      textAlign: "right",
                    }}>
                      ₹{(parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity).toLocaleString("en-IN")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div style={{
              padding: "1.2rem 1.5rem",
              background: "#f8f9ff",
              borderTop: "1px solid #e0e7ff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}>
              <div>
                <strong>Total Amount:</strong>
              </div>
              <div style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                color: "#1e40af",
              }}>
                ₹{order.total.toLocaleString("en-IN")}
              </div>
            </div>

            {/* Shipping Address */}
            <div style={{ padding: "1.2rem 1.5rem", fontSize: "0.95rem", color: "#4b5563" }}>
              <strong>Shipping Address:</strong><br />
              {order.address.doorNo}, {order.address.street}<br />
              {order.address.area}, {order.address.district}<br />
              {order.address.state}, {order.address.country} - {order.address.pincode}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
