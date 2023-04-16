import { useCharacters } from "../../hooks/useCharacters";

import CharactersItem from "./CharactersItem";

export const Characters = () => {
    const { characters } = useCharacters();

    return (
        characters && (
            <section>
                <div className="max-w-screen-xl mx-auto p-4 pt-36" id="characters">
                    {characters.map((character) => {
                        const { id } = character;
                        return <CharactersItem key={id} character={character} />;
                    })}
                </div>
            </section>
        )
    );
};

export default Characters;
