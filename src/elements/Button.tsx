interface ButtonProps {
    title: string;
    isActive?: boolean;
    children: React.ReactNode;
}

export const Button = ({ title, children, isActive }: ButtonProps) => {
    const activeLinkClass = isActive ? "bg-zinc-900 px-5 py-3 hover:bg-zinc-800" : "text-zinc-300";

    return (
        <button className={`${activeLinkClass} flex items-center justify-center gap-4 rounded-md transition-colors duration-300 hover:text-zinc-50`} title={title} aria-label={title}>
            {children}
        </button>
    );
};

export default Button;
