interface InputProps {
    type?: string;
    placeholder: string;
    isTextArea?: boolean;
}

export const Input = ({ type, placeholder }: InputProps) => {
    return <input className="bg-zinc-900 outline-none px-5 py-3 flex items-center gap-4 rounded-md transition-colors duration-300 focus:bg-zinc-800" type={type} placeholder={placeholder} />;
};

export default Input;
