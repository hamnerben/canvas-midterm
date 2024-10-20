import {useAuth} from "../components/AuthProvider";
import  FormProvider  from "../components/FormProvider";
import  TextInput  from "../components/TextInput";
import  SubmitButton  from "../components/SubmitButton";
import { useApi } from "../apiV3";
import { useEffect } from "react";
import  Button  from "../components/Button";
import { useNavigate } from "react-router-dom";
import Checkbox from "../components/Checkbox";

export default function RegisterPage() {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (form) => {
      console.log("form: ", form);
        await auth.register(form);
    }

  return (
    <>
      <h1>RegisterPage</h1>
        <FormProvider onSubmit={handleSubmit}>
          <div>
            <TextInput name="email" label="Email" type="email" />
            <TextInput name="password" label="Password" type="password" />
            <Checkbox name="isTeacher" label="I am a teacher" type="checkbox" />
            <SubmitButton>Register</SubmitButton>
          </div>
        </FormProvider>
        <div className="w-5">
        <Button onClick={() => navigate("/login")}>Login Page</Button>
        </div>
        {auth.error && <p className="text-red-600">{auth.error}</p>}
    </>
  );
}
