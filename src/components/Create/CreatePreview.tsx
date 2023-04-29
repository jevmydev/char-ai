import { type CharactersType } from "../../types";

import CharactersItem from "../Characters/CharactersItem";

interface CreatePreviewProps {
    character: CharactersType;
}

export const CreatePreview = ({ character }: CreatePreviewProps) => {
    return (
        <div className="flex-1 w-full p-4 bg-zinc-950 rounded-md flex flex-col gap-4">
            <h3 className="font-bold text-2xl">Previsualización</h3>
            <CharactersItem character={character} />
        </div>
    );
};

export default CreatePreview;
