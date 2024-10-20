import Card from "../components/Card";
import { useEffect, useState, nav } from "react";
import Button from "../components/Button";
import {useApi} from "../apiV3";
import { useParams, useNavigate } from "react-router-dom";
import {useAuth} from "../components/AuthProvider";

export default function pages() {

  
  const [loading, setLoading] = useState(true);
  const [isTeacher, setIsTeacher] = useState(false)
  const [showDelete, setShowDelete] = useState(true);
  const [showEdit, setShowEdit] = useState(true);
  const [pages, setpages] = useState([]);
  const navigate = useNavigate();
  const auth = useAuth()

  useEffect(() => {
    const fetchData = async () => {
      const fetchedpages = await useApi('pages').getAll();
      setpages(fetchedpages);
      setLoading(false);


    };
    fetchData();
  }, []);

  const handleDelete = async (title) => {
    console.log("to delete", title);
    setLoading(true);
    const pageObj = await useApi('pages').getByField('title', title);
    await useApi('pages').delete(pageObj.id);
    const fetchedpages = await useApi('pages').getAll();
    setpages(fetchedpages);
    setLoading(false);
  };


  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <>
    <div className="w-full px-6 flex flex-col items-start space-y-4">
      <h1>pages</h1>
      {pages.map((page) => {
        return (
          <Card 
            key={page.title}
            title={page.title}
            content={page.content}
            showDelete={isTeacher}
            showEdit={isTeacher}
            onDelete={() => handleDelete(page.title)}
            onEdit={() => navigate(`/pages/edit/${page.id}`)}
          />
        );
      })}

      <Button onClick={() => navigate("/pages/create")}>Add page</Button>
      </div>
    </>
  );
}
