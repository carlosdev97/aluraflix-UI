import { useState } from "react";

export const useForm = (initialForm, validateForm) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const HandleInputBlur = (event) => {
        HandleInputChange(event)
        setErrors(validateForm(form))
    };
    const HandleInputChange = (event) => {
        setForm({...form, [event.target.name]:event.target.value })
    };
    const HandleInputSubmit = (event) => {
        
    };
    
    return {
        form,
        errors,
        loading,
        response,
        HandleInputBlur,
        HandleInputChange,
        HandleInputSubmit
    };
}