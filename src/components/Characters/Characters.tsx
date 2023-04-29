import { useCharacters } from "../../hooks/useCharacters";

import CharactersItem from "./CharactersItem";

export const Characters = () => {
    const { characters } = useCharacters();

    return (
        characters && (
            <section>
                <div className="max-w-screen-xl mx-auto p-4 py-36 relative" id="characters">
                    <h2 className="font-bold text-7xl tracking-tighter pb-8">Personajes famosos</h2>
                    <div className="flex gap-4">
                        {characters.map((character) => {
                            const { id } = character;
                            return <CharactersItem key={id} character={character} />;
                        })}
                    </div>
                </div>
            </section>
        )
    );
};

export default Characters;
