import CreateForm from "./CreateForm";
import CreatePreview from "./CreatePreview";

export const Create = () => {
    return (
        <section className="bg-green-700">
            <div className="max-w-screen-xl mx-auto p-4 py-36">
                <h2 className="font-bold text-7xl tracking-tighter pb-8">Crea tu propio personaje</h2>
                <div className="flex gap-4 pt-16">
                    <CreateForm />
                    <CreatePreview />
                </div>
            </div>
        </section>
    );
};

export default Create;
