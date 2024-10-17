import { useState } from "react";
import "./App.css";
import  HomePage  from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Announcements from "./pages/Announcements";
import AnnouncementsCreate from "./pages/AnnouncementsCreate";
import AnnouncementsEdit from "./pages/AnnouncementsEdit";
import RegisterPage from "./pages/RegisterPage";
import Pages from "./pages/Pages";
import ProfilePage from "./pages/ProfilePage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/announcements/edit/:id" element={<AnnouncementsEdit />} />
          <Route path="/announcements/create" element={<AnnouncementsCreate />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
