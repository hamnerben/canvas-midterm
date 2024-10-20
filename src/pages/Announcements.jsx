import Card from "../components/Card";
import { useEffect, useState, nav } from "react";
import Button from "../components/Button";
import {useApi} from "../apiV3";
import { useParams, useNavigate } from "react-router-dom";
import {useAuth} from "../components/AuthProvider";

export default function Announcements() {

  
  const [loading, setLoading] = useState(true);
  const [announcements, setAnnouncements] = useState([]);
  const [isTeacher, setIsTeacher] = useState(false)
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAnnouncments = await useApi('announcements').getAll();
      setAnnouncements(fetchedAnnouncments);
      setIsTeacher(auth.user.isTeacher);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async (title) => {
    console.log("to delete", title);
    setLoading(true);
    const announcementObj = await useApi('announcements').getByField('title', title);
    await useApi('announcements').delete(announcementObj.id);
    const fetchedAnnouncments = await useApi('announcements').getAll();
    setAnnouncements(fetchedAnnouncments);
    setLoading(false);
  };


  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <>
    <div className="w-full px-6 flex flex-col items-start space-y-4">
      <h1>Announcements</h1>
      {announcements.map((announcement) => {
        return (
          <Card 
            key={announcement.title}
            title={announcement.title}
            content={announcement.content}
            showDelete={isTeacher}
            showEdit={isTeacher}
            onDelete={() => handleDelete(announcement.title)}
            onEdit={() => navigate(`/announcements/edit/${announcement.id}`)}
          />
        );
      })}
      
      {isTeacher ? <Button onClick={() => navigate("/announcements/create")}>Add Announcement</Button> : ""}
      </div>
    </>
  );
}
