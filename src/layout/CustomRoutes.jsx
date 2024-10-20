import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Announcements from "../pages/Announcements";
import AnnouncementsCreate from "../pages/AnnouncementsCreate";
import AnnouncementsEdit from "../pages/AnnouncementsEdit";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import { useAuth } from "../components/AuthProvider";
import Button  from "../components/Button"
import Header from "./Header"
import Pages from "../pages/Pages";
import PagesCreate from "../pages/PagesCreate";
import PagesEdit from "../pages/PagesEdit";

export default function CustomRoutes() {
  const auth = useAuth();
return (
<>
{auth.user ? <h2>${auth.user.email} is logged in</h2> : <h2>Not logged in</h2>}
{auth.user ? <Button className="w-3" onClick={() => {auth.logout()}}>Log out</Button> : ""}

    <Router>
    <Header />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {auth.user && (  // if user is logged in, show these routes
        <>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route
        path="/announcements/edit/:id"
        element={<AnnouncementsEdit />}
      />
      <Route
        path="/announcements/create"
        element={<AnnouncementsCreate />}
      />
      <Route path="/pages" element={<Pages />} />
      <Route
        path="/pages/edit/:id"
        element={<PagesEdit />}
      />
      <Route
        path="/pages/create"
        element={<PagesCreate />}
      />
      </>
      )}

    </Routes>
  </Router>
  </>
)
}