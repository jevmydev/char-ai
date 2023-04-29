interface TextAreaProps {
    name?: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ name, placeholder, onChange }: TextAreaProps) => {
    return (
        <textarea
            className="bg-zinc-900 outline-none px-5 py-3 flex items-center gap-4 rounded-md transition-colors duration-300 focus:bg-zinc-800"
            name={name}
            placeholder={placeholder}
            required
            onChange={onChange}
        ></textarea>
    );
};

export default TextArea;
