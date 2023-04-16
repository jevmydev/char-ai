import Link from "../../elements/Link";

export const Header = () => {
    return (
        <header className="fixed z-10 w-full border-b border-b-zinc-800 bg-zinc-900">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <h1 className="font-bold text-4xl tracking-tighter">
                    <Link to="/" title="char-ai">
                        char-ai
                    </Link>
                </h1>
                <nav>
                    <ul className="flex items-center gap-4">
                        <li>Inicio</li>
                        <li>Inicio</li>
                        <li>Inicio</li>
                        <li>Inicio</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
