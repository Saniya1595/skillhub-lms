import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data));
  }, []);

  const handleEnroll = (id) => {
    localStorage.setItem("selectedCourse", id);
    navigate("/login");
  };

  return (
    <div style={page}>
      <h1 style={title}>🚀 Level Up Your Skills</h1>
      <p style={subtitle}>Learn fast. Learn smart. Learn now.</p>

      <div style={grid}>
        {courses.map(c => (
          <div key={c._id} style={card}>
            <h3>{c.title}</h3>

            <span style={c.price === 0 ? free : price}>
              {c.price === 0 ? "FREE" : `₹${c.price}`}
            </span>

            <button style={btn} onClick={() => handleEnroll(c._id)}>
              Enroll →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  padding: "50px",
  background: "linear-gradient(135deg,#667eea,#764ba2)",
  color: "#fff",
  fontFamily: "Inter, system-ui"
};

const title = {
  fontSize: "42px",
  fontWeight: "800"
};

const subtitle = {
  marginBottom: "40px",
  opacity: 0.85
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "30px"
};

const card = {
  background: "rgba(255,255,255,0.2)",
  backdropFilter: "blur(14px)",
  padding: "28px",
  borderRadius: "22px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  transition: "transform 0.3s",
};

const price = {
  display: "inline-block",
  margin: "14px 0",
  padding: "6px 14px",
  borderRadius: "999px",
  background: "#111827",
  fontWeight: "600"
};

const free = {
  ...price,
  background: "#22c55e"
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#fff",
  color: "#000",
  borderRadius: "14px",
  border: "none",
  fontWeight: "700",
  cursor: "pointer"
};
