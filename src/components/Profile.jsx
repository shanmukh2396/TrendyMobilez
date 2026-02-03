import { useNavigate } from "react-router-dom";

export default function Profile() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>My Profile</h1>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Member since:</strong> February 2026
      </p>
      {/* Add more profile info later */}
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          background: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}
