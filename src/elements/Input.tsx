interface InputProps {
    name?: string;
    type?: string;
    placeholder: string;
    isTextArea?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ name, type, placeholder, onChange }: InputProps) => {
    return (
        <input
            className="bg-zinc-900 outline-none px-5 py-3 flex items-center gap-4 rounded-md transition-colors duration-300 focus:bg-zinc-800"
            type={type}
            name={name}
            placeholder={placeholder}
            required
            onChange={onChange}
        />
    );
};

export default Input;
