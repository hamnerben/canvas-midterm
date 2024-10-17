import Card from "../components/Card";
import { useState } from "react";
import Button from "../components/Button";

export default function Announcements() {
  const [showDelete, setShowDelete] = useState(true);
  const [showEdit, setShowEdit] = useState(true);
  const [announcements, setAnnouncements] = useState([
    {
      title: "title of the announcement",
      body: "This is the first announcement!",
    },
  ]);


  return (
    <>
    <div className="flex flex-col items-start space-y-4">
      <h1>Announcements!</h1>
      {announcements.map((announcement) => {
        return (
          <Card 
            key={announcement.title}
            className="text-left"
            title={announcement.title}
            body={announcement.body}
            showDelete={showDelete}
            showEdit={showEdit}
          />
        );
      })}
      
      <Button text="Add Announcement" onClick={() => console.log("Add Announcement")} />
      </div>
    </>
  );
}
