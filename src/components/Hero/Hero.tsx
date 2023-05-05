import Lines from "../../elements/Lines";
import Link from "../../elements/Link";

export const Hero = () => {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto p-4 py-36 min-h-screen relative">
                <h2 className="font-bold max-w-5xl text-7xl text-green-300">Encuentra a tu personaje favorito y experimenta un nuevo nivel de interacción</h2>
                <div className="flex items-center gap-4 pt-8">
                    <Link to="#characters" title="Prueba a chatear" isActive isHashLink>
                        ¡Pruébalo!
                    </Link>
                </div>
                <Lines direction="items-end" />
            </div>
        </section>
    );
};

export default Hero;
