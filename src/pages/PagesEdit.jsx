import FormProvider from "../components/FormProvider";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import {useApi} from "../apiV3";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PagesEdit() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const {id} = useParams();
    const [page, setpage] = useState(null);

    const handleSubmit = async (form) => {
        await useApi("pages").update(id, form);
        navigate("/pages");
    }

    useEffect(() => {
        const fetchData = async () => {
            const fetchedAnnouncment = await useApi('pages').getById(id);
            setpage(fetchedAnnouncment);
            setIsLoading(false);
        };
        fetchData();
    }, [id]);

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
        <h1>Edit Announcment</h1>
        <div >
        <FormProvider  defaultValue={page} onSubmit={handleSubmit}>
            <TextInput name="title" label="Title" />
            <TextInput  name="content" label="Content" />
            <SubmitButton >Save Edit</SubmitButton>
        </FormProvider>
        </div>
        </>
    )
}