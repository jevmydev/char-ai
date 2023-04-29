import Link from "../../elements/Link";

export const Header = () => {
    return (
        <header className="absolute w-full z-10">
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
                <h1 className="font-bold text-4xl">
                    <Link to="/" title="char-ai">
                        char-ai
                    </Link>
                </h1>
            </div>
        </header>
    );
};

export default Header;
