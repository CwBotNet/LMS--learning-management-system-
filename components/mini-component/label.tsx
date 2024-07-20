import { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const label = ({ type, placeholder, onChange, htmlFor, label }: {
    type?: string, placeholder?: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    htmlFor?: string, label?: string
}) => {
    return (
        <>
            <Label htmlFor={htmlFor} >{label}</Label>
            <Input type={type || "text"} placeholder={placeholder} onChange={onChange} />
        </>
    );
}

export default label;