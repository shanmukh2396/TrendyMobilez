// src/components/Profile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  // Load saved profile data from localStorage (if any)
  const savedProfile = JSON.parse(localStorage.getItem("userProfile") || "{}");

  const [profile, setProfile] = useState({
    username: localStorage.getItem("username") || "",
    email: savedProfile.email || "",
    phone: savedProfile.phone || "",
    address: savedProfile.address || {
      doorNo: "",
      street: "",
      area: "",
      district: "",
      state: "",
      country: "",
      pincode: "",
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userProfile"); // optional: clear profile too
    navigate("/login");
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel → reset to original saved data
      setEditedProfile({ ...profile });
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Basic validation
    if (editedProfile.email && !editedProfile.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    if (editedProfile.phone && !/^\+?\d{10,15}$/.test(editedProfile.phone.replace(/\s/g, ""))) {
      alert("Please enter a valid phone number (10–15 digits)");
      return;
    }

    // Save changes to state & localStorage
    setProfile({ ...editedProfile });
    localStorage.setItem("userProfile", JSON.stringify(editedProfile));

    // Also update username in login key if changed
    if (editedProfile.username !== localStorage.getItem("username")) {
      localStorage.setItem("username", editedProfile.username);
    }

    alert("Profile updated successfully!");
    setIsEditing(false);
  };

  const handleChange = (e, field, subField = null) => {
    if (subField) {
      setEditedProfile({
        ...editedProfile,
        address: {
          ...editedProfile.address,
          [subField]: e.target.value,
        },
      });
    } else {
      setEditedProfile({
        ...editedProfile,
        [field]: e.target.value,
      });
    }
  };

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "2rem 1rem",
        maxWidth: "800px",
        margin: "2rem auto",
        background: isDarkMode ? "#111827" : "#f9fafb",
        color: isDarkMode ? "#e5e7eb" : "#1f2937",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          background: isDarkMode ? "#1f2937" : "white",
          borderRadius: "16px",
          boxShadow: isDarkMode
            ? "0 10px 25px rgba(0,0,0,0.5)"
            : "0 10px 25px rgba(0,0,0,0.1)",
          padding: "2.5rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
          <h1 style={{ margin: 0, fontSize: "2.3rem" }}>My Profile</h1>

          <div>
            {!isEditing ? (
              <button
                onClick={handleEditToggle}
                style={{
                  padding: "10px 24px",
                  background: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Edit Profile
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  style={{
                    padding: "10px 24px",
                    background: "#10b981",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginRight: "1rem",
                  }}
                >
                  Save Changes
                </button>
                <button
                  onClick={handleEditToggle}
                  style={{
                    padding: "10px 24px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>

        <div style={{ display: "grid", gap: "1.8rem" }}>
          {/* Username */}
          <div>
            <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem", fontSize: "1.05rem" }}>
              Username
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editedProfile.username}
                onChange={(e) => handleChange(e, "username")}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  background: isDarkMode ? "#374151" : "#fff",
                  color: isDarkMode ? "#e5e7eb" : "#111827",
                  fontSize: "1.05rem",
                }}
              />
            ) : (
              <p style={{ margin: 0, fontSize: "1.2rem", fontWeight: "500" }}>
                {profile.username || "Not set"}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem", fontSize: "1.05rem" }}>
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                value={editedProfile.email}
                onChange={(e) => handleChange(e, "email")}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  background: isDarkMode ? "#374151" : "#fff",
                  color: isDarkMode ? "#e5e7eb" : "#111827",
                  fontSize: "1.05rem",
                }}
              />
            ) : (
              <p style={{ margin: 0, fontSize: "1.1rem" }}>
                {profile.email || "Not set"}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label style={{ fontWeight: "600", display: "block", marginBottom: "0.6rem", fontSize: "1.05rem" }}>
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={editedProfile.phone}
                onChange={(e) => handleChange(e, "phone")}
                placeholder="+91 98765 43210"
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  background: isDarkMode ? "#374151" : "#fff",
                  color: isDarkMode ? "#e5e7eb" : "#111827",
                  fontSize: "1.05rem",
                }}
              />
            ) : (
              <p style={{ margin: 0, fontSize: "1.1rem" }}>
                {profile.phone || "Not set"}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label style={{ fontWeight: "600", display: "block", marginBottom: "0.8rem", fontSize: "1.05rem" }}>
              Address
            </label>

            {isEditing ? (
              <div style={{ display: "grid", gap: "1rem" }}>
                <input
                  placeholder="Door No / Flat No"
                  value={editedProfile.address.doorNo}
                  onChange={(e) => handleChange(e, "address", "doorNo")}
                  style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1.05rem" }}
                />
                <input
                  placeholder="Street Name / Road"
                  value={editedProfile.address.street}
                  onChange={(e) => handleChange(e, "address", "street")}
                  style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1.05rem" }}
                />
                <input
                  placeholder="Area / Locality / Village"
                  value={editedProfile.address.area}
                  onChange={(e) => handleChange(e, "address", "area")}
                  style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1.05rem" }}
                />
                <input
                  placeholder="District"
                  value={editedProfile.address.district}
                  onChange={(e) => handleChange(e, "address", "district")}
                  style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1.05rem" }}
                />
                <input
                  placeholder="State"
                  value={editedProfile.address.state}
                  onChange={(e) => handleChange(e, "address", "state")}
                  style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1.05rem" }}
                />
                <input
                  placeholder="Country"
                  value={editedProfile.address.country}
                  onChange={(e) => handleChange(e, "address", "country")}
                  style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1.05rem" }}
                />
                <input
                  placeholder="Pincode"
                  value={editedProfile.address.pincode}
                  onChange={(e) => handleChange(e, "address", "pincode")}
                  maxLength={6}
                  style={{ padding: "12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "1.05rem" }}
                />
              </div>
            ) : (
              <div style={{ lineHeight: "1.7", fontSize: "1.1rem" }}>
                {profile.address.doorNo || profile.address.street || profile.address.area ? (
                  <>
                    <p style={{ margin: 0 }}>
                      {profile.address.doorNo && `${profile.address.doorNo}, `}
                      {profile.address.street}
                    </p>
                    <p style={{ margin: "0.3rem 0 0" }}>
                      {profile.address.area && `${profile.address.area}, `}
                      {profile.address.district}
                    </p>
                    <p style={{ margin: "0.3rem 0 0" }}>
                      {profile.address.state && `${profile.address.state}, `}
                      {profile.address.country} {profile.address.pincode && `- ${profile.address.pincode}`}
                    </p>
                  </>
                ) : (
                  <p style={{ color: isDarkMode ? "#9ca3af" : "#6b7280" }}>No address saved yet</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Logout */}
        <div style={{ marginTop: "3.5rem", textAlign: "center" }}>
          <button
            onClick={handleLogout}
            style={{
              padding: "14px 48px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "1.15rem",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
