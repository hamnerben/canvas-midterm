import { useForm } from "./FormProvider";

export default function Checkbox({name, label}) {
  const form = useForm();

  const handleChange = (e) => {
    form.setValue(name, e.target.checked);
  }

  return (
    <>
    <label className="text-white">
      {label}
      <input  
        type="checkbox"
        name={name}
        checked={form.form?.[name] || false}
        onChange={handleChange} 
      />
    </label>
    </>
  );
}
