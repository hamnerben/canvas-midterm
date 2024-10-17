import {useForm} from "./FormProvider";

export const SubmitButton = ({children}) => {
    const {handleSubmit} = useForm();

    return (
        <button type="submit" onClick={handleSubmit}>
            {children}
        </button>
    );
}