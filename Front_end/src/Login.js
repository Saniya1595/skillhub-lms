import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    );

    localStorage.setItem("token", res.data.token);
    alert("🎉 Login successful!");
    navigate("/payment");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={{ fontSize: "28px" }}>Welcome Back 👋</h2>
        <p style={{ opacity: 0.7 }}>Let’s continue learning</p>

        <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
          <input
            style={input}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            style={input}
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button style={loginBtn}>Login →</button>
        </form>

        <button
          style={registerBtn}
          onClick={() => navigate("/register")}
        >
          New here? Register
        </button>
      </div>
    </div>
  );
}

const page = {
  height: "100vh",
  background: "linear-gradient(135deg,#ff9a9e,#fad0c4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  background: "#fff",
  padding: "40px",
  borderRadius: "26px",
  width: "340px",
  textAlign: "center",
  boxShadow: "0 30px 60px rgba(0,0,0,0.25)"
};

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "12px",
  border: "1px solid #ddd"
};

const loginBtn = {
  width: "100%",
  padding: "12px",
  background: "#000",
  color: "#fff",
  borderRadius: "14px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer"
};

const registerBtn = {
  marginTop: "12px",
  width: "100%",
  padding: "12px",
  background: "#6366f1",
  color: "#fff",
  borderRadius: "14px",
  border: "none",
  fontWeight: "600",
  cursor: "pointer"
};
