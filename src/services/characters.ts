import { CHARACTERS_URL } from "../constants";
import { type CharactersArrayType } from "../types";

export const getCharacters = async (): Promise<CharactersArrayType> => {
    const res = await fetch(CHARACTERS_URL);
    const characters: CharactersArrayType = await res.json();

    return characters;
};
