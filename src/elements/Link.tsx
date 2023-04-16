import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
    to: string;
    title: string;
    target?: string;
    isActive?: boolean;
    children: React.ReactNode;
}

export const Link = ({ to, title, target, isActive, children }: LinkProps) => {
    const activeLinkClass = isActive ? "bg-zinc-900 px-6 py-3 hover:bg-zinc-800" : "text-zinc-300";

    return (
        <RouterLink className={`${activeLinkClass} rounded-full transition-colors duration-300 hover:text-zinc-50`} to={to} title={title} target={target} rel="noopener noreferrer">
            {children}
        </RouterLink>
    );
};

export default Link;
