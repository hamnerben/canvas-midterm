import {createContext, useContext, useState} from "react";

const FormContext = createContext();

export const FormProvider = ({children, onSubmit, defaultValue}) => {
    const [form, setForm] =  useState(defaultValue);
    const [errors, setErrors] = useState({});

    const setValue = (name, value) => {
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        onSubmit(form);
    }

    return (
        <FormContext.Provider 
        value={{form, setValue, errors, setErrors, handleSubmit}}>
            {children}
        </FormContext.Provider>
    );

}


export const useForm = () => {
    const context = useContext(FormContext);

    if (!context) {
        throw new Error("useForm must be used within a FormProvider");
    }

    return context;
}