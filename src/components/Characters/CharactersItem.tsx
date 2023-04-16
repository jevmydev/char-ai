import { type CharactersType } from "../../types";

interface CharactersItemProps {
    character: CharactersType;
}

export const CharactersItem = ({ character }: CharactersItemProps) => {
    console.log(character);

    return <article></article>;
};

export default CharactersItem;
