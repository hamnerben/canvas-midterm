import {useAuth} from "../components/AuthProvider";
import  FormProvider  from "../components/FormProvider";
import  TextInput  from "../components/TextInput";
import  SubmitButton  from "../components/SubmitButton";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (form) => {
        await auth.login(form);
    }

  return (
    <>
      <h1>LoginPage</h1>
      {auth.user && <p className="text-green-600">Logged in as {auth.user.email}</p>}
        <FormProvider onSubmit={handleSubmit}>
            <TextInput name="email" label="Email" type="email" />
            <TextInput name="password" label="Password" type="password" />
            <SubmitButton  >Login</SubmitButton>
        </FormProvider>
        {auth.error && <p className="text-red-600">{auth.error}</p>}
        <div className="w-5">
        <Button onClick={() => navigate("/register")}>Register Page</Button>
        </div>
    </>
  );
}
