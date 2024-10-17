import {useAuth} from "../components/AuthProvider";
import  FormProvider  from "../components/FormProvider";
import  TextInput  from "../components/TextInput";
import  SubmitButton  from "../components/SubmitButton";

export default function LoginPage() {
    const auth = useAuth();
  return (
    <>
      <h1>LoginPage</h1>
      <div className="flex-col">
      
        <FormProvider>
            <TextInput name="email" label="Email" type="email" />
            <TextInput name="password" label="Password" type="password" />
            <SubmitButton>Login</SubmitButton>
        </FormProvider>
        {auth.error && <p className="text-red-600">{auth.error}</p>}
        </div>
    </>
  );
}
