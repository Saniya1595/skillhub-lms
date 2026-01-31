import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  const pay = () => {
    alert("💳 Payment successful!");
    navigate("/course");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h2>Unlock Your Course 🔓</h2>
        <p style={{ opacity: 0.7 }}>One-time secure payment</p>

        <button style={btn} onClick={pay}>
          Pay & Start Learning 🚀
        </button>
      </div>
    </div>
  );
}

const page = {
  height: "100vh",
  background: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  background: "#fff",
  padding: "45px",
  borderRadius: "28px",
  textAlign: "center",
  boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
};

const btn = {
  marginTop: "20px",
  padding: "14px 30px",
  background: "#000",
  color: "#fff",
  borderRadius: "18px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer"
};
