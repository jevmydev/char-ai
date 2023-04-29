import Link from "../../elements/Link";
import Lines from "../../elements/Lines";

export const Footer = () => {
    return (
        <footer className="bg-zinc-950 z-10 relative">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between relative">
                <p className="flex items-center gap-2 z-10">
                    Desarrollado por
                    <span className="font-bold">
                        <Link title="Descubre al creador" to="https://jeremydiaz.netlify.app/" isActive target="_blank">
                            jevmydev
                        </Link>
                    </span>
                </p>
                <Lines direction="items-end" />
            </div>
        </footer>
    );
};

export default Footer;
