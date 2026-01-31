import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./Courses";
import Login from "./Login";
import Payment from "./Payment";
import CourseContent from "./CourseContent";
import AdminAddCourse from "./AdminAddCourse";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/course" element={<CourseContent />} />
        <Route path="/admin/add-course" element={<AdminAddCourse />} />
      </Routes>
    </BrowserRouter>
  );
}
