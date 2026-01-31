import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminAddCourse() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/courses", {
      title, price, videoUrl
    });
    alert("Course added!");
    navigate("/");
  };

  return (
    <form onSubmit={submit} style={box}>
      <h2>Add Course</h2>
      <input placeholder="Title" onChange={e=>setTitle(e.target.value)} />
      <input placeholder="Price" onChange={e=>setPrice(e.target.value)} />
      <input placeholder="YouTube URL" onChange={e=>setVideoUrl(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

const box = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px"
};
