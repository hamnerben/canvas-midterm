import FormProvider from "../components/FormProvider";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import {useApi} from "../apiV3";
import { useNavigate } from "react-router-dom";

export default function PagesCreate() {
    const navigate = useNavigate();

    const handleSubmit = async (form) => {
        await useApi("pages").create(form);
        navigate("/pages");
    }

    return (
        <>
        <h1>Post Page</h1>
        <div>
        <FormProvider onSubmit={handleSubmit}>
            <TextInput name="title" label="Title" />
            <TextInput name="content" label="Content" />
            <SubmitButton >Post</SubmitButton>
        </FormProvider>
        </div>

        </>
    )
}