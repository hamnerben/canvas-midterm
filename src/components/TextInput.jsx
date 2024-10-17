import { useForm } from "./FormProvider";

export default function TextInput({ type = "text", name, label, value}) {
  const form = useForm();

  return (
    <label>
      {label}
      <input 
      type={type}
       name={name}
        value={value}
         onChange={(e) => form.setValue(name, e.target.value) } />
    </label>
  );
}
