import Card from "../components/Card";
import { useState } from "react";

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
      <Card 
        className="text-left"
        title="title fo the annoucnment"
        body="This is the first announcement!"
        showDelete={showDelete}
        showEdit={showEdit}
      />
      </div>
    </>
  );
}
