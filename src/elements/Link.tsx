import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
    to: string;
    isHashLink?: boolean;
    title: string;
    target?: string;
    isActive?: boolean;
    children: React.ReactNode;
}

export const Link = ({ to, isHashLink, title, target, isActive, children }: LinkProps) => {
    const activeLinkClass = isActive ? "bg-zinc-900 px-5 py-3 hover:bg-zinc-800" : "text-zinc-300";

    return !isHashLink ? (
        <RouterLink
            className={`${activeLinkClass} flex items-center gap-4 rounded-md transition-colors duration-300 hover:text-zinc-50`}
            to={to}
            title={title}
            target={target}
            rel="noopener noreferrer"
        >
            {children}
        </RouterLink>
    ) : (
        <a className={`${activeLinkClass} flex items-center gap-4 rounded-md transition-colors duration-300 hover:text-zinc-50`} href={to} title={title} target={target} rel="noopener noreferrer">
            {children}
        </a>
    );
};

export default Link;
