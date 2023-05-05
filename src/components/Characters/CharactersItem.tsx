import { useChatter } from "../../hooks/useChatter";
import { type CharactersType } from "../../types";

import Link from "../../elements/Link";

interface CharactersItemProps {
    character: CharactersType;
}

export const CharactersItem = ({ character }: CharactersItemProps) => {
    const { name, image } = character;
    const { setChatter } = useChatter();

    const handleClick = () => setChatter(character);

    return (
        <Link to={`/chat/${name}`} title={`Chatea con ${name}`} isActive onClick={handleClick}>
            <article className="flex flex-col gap-4 p-8 items-center">
                <header>
                    <img className="rounded-2xl w-52 h-52 object-cover" src={image} alt={name} loading="lazy" decoding="async" />
                </header>
                <footer>
                    <h3 className="font-bold text-2xl text-green-300">{name}</h3>
                </footer>
            </article>
        </Link>
    );
};

export default CharactersItem;
