import { useForm } from "./FormProvider";

export default function Checkbox({name, label}) {
  const form = useForm();

  const handleChange = (e) => {
    form.setValue(name, e.target.checked);
    console.log("checkbox changed to ", e.target.checked);
  }

  return (
    <>
    <label className="text-white">
      {label}
      <input  
        className="appearance-none border border-gray-300"
        type="radio"
        name={name}
        checked={form.form?.[name] || false}
        onChange={(e) => handleChange(e)} 
      />
    </label>
    </>
  );
}
