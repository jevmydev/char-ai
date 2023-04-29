import Link from "../../elements/Link";

export const Footer = () => {
    return (
        <footer className="bg-zinc-950">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <p className="flex items-center gap-2">
                    Desarrollado por
                    <span className="font-bold">
                        <Link title="Descubre al creador" to="https://jeremydiaz.netlify.app/" isActive target="_blank">
                            jevmydev
                        </Link>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
