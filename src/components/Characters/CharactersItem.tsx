import { type CharactersType } from "../../types";

import Link from "../../elements/Link";

interface CharactersItemProps {
    character: CharactersType;
}

export const CharactersItem = ({ character }: CharactersItemProps) => {
    const { name, image } = character;

    return (
        <Link to={`/chat/${name}`} title={`Chatea con ${name}`} isActive>
            <article className="flex flex-col gap-4 p-8">
                <header>
                    <img className="rounded-2xl" src={image} alt={name} loading="lazy" decoding="async" />
                </header>
                <footer>
                    <h3 className="font-bold text-2xl text-green-300">{name}</h3>
                </footer>
            </article>
        </Link>
    );
};

export default CharactersItem;
