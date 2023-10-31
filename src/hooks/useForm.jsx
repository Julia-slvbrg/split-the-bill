import { useState } from "react";

export default function useForm(initialState) {
    const [form, setForm] = useState(initialState);

    const onChangeInput = (e) => {
        const {value, name} = e.target;
        setForm({...form, [name]: value})
    };

    const clearInput = () => {
        setForm(initialState)
    };

    return [form, onChangeInput, clearInput]
}