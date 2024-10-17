import { useForm } from "./FormProvider";

export default function TextInput({ type = "text", name, label}) {
  const form = useForm();

  return (
    <label>
      {label}
      <input 
        type={type}
        name={name}
        value={form.form?.[name] || ''}
        onChange={(e) => form.setValue(name, e.target.value)} 
      />
    </label>
  );
}
