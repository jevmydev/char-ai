interface TextAreaProps {
    placeholder: string;
}

export const TextArea = ({ placeholder }: TextAreaProps) => {
    return <textarea className="bg-zinc-900 outline-none px-5 py-3 flex items-center gap-4 rounded-md transition-colors duration-300 focus:bg-zinc-800" placeholder={placeholder}></textarea>;
};

export default TextArea;
