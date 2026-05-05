import { Link } from "react-router-dom";

const BackButton = () => (
  <Link
    to="/"
    style={{
      position: "fixed",
      top: "20px",
      left: "20px",
      padding: "10px 15px",
      background: "rgba(0,0,0,0.7)",
      color: "#fff",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "bold",
      zIndex: 9999,
      backdropFilter: "blur(4px)",
    }}
  >
    ← Back to Menu
  </Link>
);

export default BackButton;
