import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/auth/register", {
      name, email, password
    });

    navigate("/login");
  };

  return (
    <div style={bg}>
      <div style={card}>
        <h2>Create Account ✨</h2>

        <form onSubmit={handleRegister}>
          <input placeholder="Name" onChange={e => setName(e.target.value)} />
          <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

const bg = {
  height: "100vh",
  background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  background: "#fff",
  padding: "40px",
  borderRadius: "20px",
  width: "320px",
  textAlign: "center"
};
