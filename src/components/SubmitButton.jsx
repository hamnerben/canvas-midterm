import {useForm} from "./FormProvider";

export default function SubmitButton ({children}) {
    const {handleSubmit} = useForm();

    return (
        <button type="submit" onClick={handleSubmit}>
            {children}
        </button>
    );
}