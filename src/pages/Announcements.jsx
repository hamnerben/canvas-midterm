import Card from "../components/Card";
import { useState, nav } from "react";
import Button from "../components/Button";
import {useApi} from "../apiV3";
import { useParams, useNavigate } from "react-router-dom";

export default function Announcements() {

  const fetchedAnnouncments = useApi('announcements').getAll()
  const [showDelete, setShowDelete] = useState(true);
  const [showEdit, setShowEdit] = useState(true);
  const [announcements, setAnnouncements] = useState([
    {
      title: "title of the announcement",
      body: "This is the first announcement!",
    },
  ]);
  const navigate = useNavigate();

  const handleAddAnnouncement = () => {
   const tempAnouncement = {
        title: `temporary added announcement number ${announcements.length + 1}`,
        body: `This is the announcement number ${announcements.length + 1}!`,
      }
        useApi('announcements').create(tempAnouncement)
        .then(() => {
          setAnnouncements([...announcements, tempAnouncement])
        })
}

  return (
    <>
    <div className="w-full px-6 flex flex-col items-start space-y-4">
      <h1>Announcements!</h1>
      {announcements.map((announcement) => {
        return (
          <Card 
            key={announcement.title}
            title={announcement.title}
            body={announcement.body}
            showDelete={showDelete}
            showEdit={showEdit}
          />
        );
      })}

      <Button text="Add Announcement" onClick={() => navigate("/announcements/create")} />
      </div>
    </>
  );
}
