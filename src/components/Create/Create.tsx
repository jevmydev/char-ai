import { useChatter } from "../../hooks/useChatter";

import CreateForm from "./CreateForm";
import CreatePreview from "./CreatePreview";

export const Create = () => {
    const { chatter, setChatter } = useChatter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name")?.toString() || "";
        const description = formData.get("description")?.toString() || "";
        const image = `https://unavatar.io/${name.split(" ").join("-")}`;

        setChatter({
            name,
            description,
            image
        });

        e.currentTarget.reset();
    };

    return (
        <section className="bg-green-700">
            <div className="max-w-screen-xl mx-auto p-4 py-36">
                <h2 className="font-bold pb-8 text-4xl sm:text-6xl lg:text-7xl">Crea tu propio personaje</h2>
                <div className="flex gap-4 flex-col lg:flex-row">
                    <CreateForm onSubmit={handleSubmit} />
                    {chatter && <CreatePreview character={chatter} />}
                </div>
            </div>
        </section>
    );
};

export default Create;
