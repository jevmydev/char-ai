import { useState } from "react";
import { type CharactersType } from "../../types";

import CreateForm from "./CreateForm";
import CreatePreview from "./CreatePreview";

export const Create = () => {
    const [character, setCharacter] = useState<CharactersType | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.toString() || "";
        const description = formData.get("description")?.toString() || "";

        setCharacter({
            name,
            description,
            image: `https://unavatar.io/${name}`
        });
    };

    return (
        <section className="bg-green-700">
            <div className="max-w-screen-xl mx-auto p-4 py-36">
                <h2 className="font-bold text-7xl pb-8">Crea tu propio personaje</h2>
                <div className="flex gap-4 pt-16">
                    <CreateForm onSubmit={handleSubmit} />
                    {character && <CreatePreview character={character} />}
                </div>
            </div>
        </section>
    );
};

export default Create;
