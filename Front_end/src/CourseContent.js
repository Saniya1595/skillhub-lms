import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CourseContent() {
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("selectedCourse");

    axios.get("http://localhost:5000/api/courses")
      .then(res => {
        const found = res.data.find(c => c._id === id);
        setCourse(found);
      });
  }, []);

  if (!course) return null;

  const videoId = course.videoUrl.split("v=")[1];

  return (
    <div style={page}>
      <button style={backBtn} onClick={() => navigate("/")}>
        ⬅ Dashboard
      </button>

      <h1>{course.title}</h1>

      <div style={videoCard}>
        <iframe
          width="100%"
          height="320"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          title="Course Video"
        />
      </div>

      <button
        style={certBtn}
        onClick={() => alert("🎓 Certificate downloaded successfully!")}
      >
        🎓 Download Certificate
      </button>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  padding: "40px",
  background: "linear-gradient(135deg,#020617,#1e293b)",
  color: "#fff"
};

const videoCard = {
  background: "rgba(255,255,255,0.1)",
  padding: "20px",
  borderRadius: "20px",
  marginBottom: "20px"
};

const backBtn = {
  marginBottom: "20px",
  padding: "10px 18px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.2)",
  border: "none",
  color: "#fff",
  cursor: "pointer"
};

const certBtn = {
  padding: "14px 26px",
  background: "#22c55e",
  borderRadius: "18px",
  border: "none",
  fontWeight: "700",
  cursor: "pointer"
};
