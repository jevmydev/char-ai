import { useEffect, useState } from "react";
import { getCharacters } from "../services/characters";
import { type CharactersArrayType } from "../types";

export const useCharacters = () => {
    const [characters, setCharacters] = useState<CharactersArrayType | null>(null);

    const updateCharacters = async () => {
        try {
            const newCharacters = await getCharacters();
            setCharacters(newCharacters);
        } catch (err) {
            throw new Error("fetch call characters API");
        }
    };

    useEffect(() => {
        updateCharacters();
    }, []);

    return { characters, updateCharacters };
};
