// src/components/MyOrders.jsx
import React, { useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders") || "[]")
  );

  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  // Remove / Cancel order
  const handleCancelOrder = (orderId) => {
    if (!window.confirm("Are you sure you want to cancel/remove this order?")) {
      return;
    }

    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert("Order has been removed/cancelled.");
  };

  // Simple dark mode detection
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (orders.length === 0) {
    return (
      <div
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: isDarkMode ? "#d1d5db" : "#555",
          background: isDarkMode ? "#1f2937" : "#f9fafb",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: isDarkMode ? "#f3f4f6" : "#333" }}>
          My Orders
        </h1>
        <p style={{ fontSize: "1.3rem", maxWidth: "500px", marginBottom: "2rem" }}>
          You haven't placed any orders yet.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "12px 32px",
            fontSize: "1.1rem",
            background: isDarkMode ? "#3b82f6" : "#3498db",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2.5rem 1.5rem",
        maxWidth: "1200px",
        margin: "0 auto",
        background: isDarkMode ? "#111827" : "#f9fafb",
        minHeight: "100vh",
        color: isDarkMode ? "#e5e7eb" : "#1f2937",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.4rem",
          marginBottom: "2.5rem",
          color: isDarkMode ? "#f3f4f6" : "#111827",
        }}
      >
        My Orders
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {orders.map((order) => {
          const isExpanded = expandedOrder === order.id;
          const canCancel = order.status !== "Delivered" && order.status !== "Cancelled";

          return (
            <div
              key={order.id}
              style={{
                border: isDarkMode ? "1px solid #374151" : "1px solid #e5e7eb",
                borderRadius: "16px",
                overflow: "hidden",
                background: isDarkMode ? "#1f2937" : "white",
                boxShadow: isDarkMode
                  ? "0 10px 25px rgba(0,0,0,0.4)"
                  : "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              {/* Order Header */}
              <div
                onClick={() => toggleExpand(order.id)}
                style={{
                  padding: "1.4rem 1.8rem",
                  background: isDarkMode ? "#374151" : "#f1f5f9",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <h3 style={{ margin: 0, fontSize: "1.4rem" }}>
                    Order #{order.id.toString().slice(-8)}
                  </h3>
                  <p style={{ margin: "0.5rem 0 0", color: isDarkMode ? "#9ca3af" : "#6b7280" }}>
                    {order.date}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <span
                    style={{
                      padding: "6px 16px",
                      background:
                        order.status === "Delivered"
                          ? isDarkMode ? "#065f46" : "#d1fae5"
                          : order.status === "Cancelled"
                          ? isDarkMode ? "#7f1d1d" : "#fee2e2"
                          : isDarkMode ? "#92400e" : "#fef3c7",
                      color:
                        order.status === "Delivered"
                          ? isDarkMode ? "#d1fae5" : "#065f46"
                          : order.status === "Cancelled"
                          ? isDarkMode ? "#fecaca" : "#991b1b"
                          : isDarkMode ? "#fef3c7" : "#92400e",
                      borderRadius: "20px",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                    }}
                  >
                    {order.status}
                  </span>

                  <span style={{ fontSize: "1.4rem" }}>
                    {isExpanded ? "▲" : "▼"}
                  </span>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div style={{ padding: "1.5rem" }}>
                  {/* Status Progress Bar */}
                  <div style={{ marginBottom: "2rem" }}>
                    <h4 style={{ marginBottom: "0.8rem" }}>Order Progress</h4>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "relative",
                        marginTop: "1.5rem",
                      }}
                    >
                      {["Pending", "Processing", "Shipped", "Delivered"].map((step, idx) => (
                        <div
                          key={step}
                          style={{
                            textAlign: "center",
                            position: "relative",
                            flex: 1,
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              background:
                                idx <= ["Pending", "Processing", "Shipped", "Delivered"].indexOf(order.status)
                                  ? "#10b981"
                                  : isDarkMode ? "#4b5563" : "#d1d5db",
                              color: "white",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 0.5rem",
                              fontWeight: "bold",
                              fontSize: "1.1rem",
                            }}
                          >
                            {idx + 1}
                          </div>
                          <p style={{ fontSize: "0.9rem" }}>{step}</p>

                          {idx < 3 && (
                            <div
                              style={{
                                position: "absolute",
                                top: "20px",
                                left: "50%",
                                width: "100%",
                                height: "4px",
                                background:
                                  idx < ["Pending", "Processing", "Shipped", "Delivered"].indexOf(order.status)
                                    ? "#10b981"
                                    : isDarkMode ? "#4b5563" : "#d1d5db",
                                transform: "translateX(-50%)",
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Items */}
                  <h4 style={{ margin: "0 0 1.2rem 0", fontSize: "1.2rem" }}>
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
                          background: isDarkMode ? "#374151" : "#f9fafb",
                          borderRadius: "10px",
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.model}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                            borderRadius: "8px",
                            border: isDarkMode ? "1px solid #4b5563" : "1px solid #e5e7eb",
                          }}
                        />

                        <div style={{ flex: 1 }}>
                          <p style={{ margin: 0, fontWeight: "600" }}>
                            {item.brand} {item.model}
                          </p>
                          <p style={{ margin: "0.4rem 0 0", color: isDarkMode ? "#9ca3af" : "#6b7280" }}>
                            Qty: {item.quantity} × {item.price}
                          </p>
                        </div>

                        <div style={{
                          fontWeight: "700",
                          fontSize: "1.1rem",
                          color: isDarkMode ? "#93c5fd" : "#1d4ed8",
                        }}>
                          ₹{(parseFloat(item.price.replace(/[^0-9.]/g, "")) * item.quantity).toLocaleString("en-IN")}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div
                    style={{
                      marginTop: "2rem",
                      padding: "1.2rem",
                      background: isDarkMode ? "#1f2937" : "#f1f5f9",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>Total Amount</span>
                    <span style={{ fontSize: "1.6rem", fontWeight: "bold", color: isDarkMode ? "#60a5fa" : "#1d4ed8" }}>
                      ₹{order.total.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Shipping Address */}
                  <div style={{ marginTop: "1.5rem", fontSize: "1rem", lineHeight: "1.6" }}>
                    <strong>Shipping Address:</strong><br />
                    {order.address.doorNo}, {order.address.street}<br />
                    {order.address.area}, {order.address.district}<br />
                    {order.address.state}, {order.address.country} - {order.address.pincode}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                    <button
                      onClick={() => {
                        const invoiceText = `
Order ID: #${order.id}
Date: ${order.date}
Status: ${order.status}

Items:
${order.items.map(i => `- ${i.brand} ${i.model} x${i.quantity} @ ${i.price}`).join("\n")}

Total: ₹${order.total.toLocaleString("en-IN")}

Shipping Address:
${order.address.doorNo}, ${order.address.street}
${order.address.area}, ${order.address.district}
${order.address.state}, ${order.address.country} - ${order.address.pincode}
                        `;
                        navigator.clipboard.writeText(invoiceText);
                        alert("Invoice copied to clipboard!\n\n" + invoiceText);
                      }}
                      style={{
                        padding: "10px 24px",
                        background: isDarkMode ? "#4b5563" : "#6b7280",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "1rem",
                      }}
                    >
                      Copy Invoice
                    </button>

                    {canCancel && (
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        style={{
                          padding: "10px 24px",
                          background: "#ef4444",
                          color: "white",
                          border: "none",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontSize: "1rem",
                          fontWeight: "500",
                        }}
                      >
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
