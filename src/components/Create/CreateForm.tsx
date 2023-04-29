import Input from "../../elements/Input";
import TextArea from "../../elements/TextArea";
import Button from "../../elements/Button";

export const CreateForm = () => {
    return (
        <form className="flex-1 flex flex-col gap-4 max-w-xs">
            <label className="flex flex-col gap-4">
                ¿Cuál es el nombre de tu personaje?
                <Input type="text" placeholder="Albert Einstein." />
            </label>
            <label className="flex flex-col gap-4">
                Describe al personaje
                <TextArea placeholder="Científico más importante, conocido y popular del siglo XX." />
            </label>
            <Button title="Crea tu personaje" isActive>
                Crea tu personaje
            </Button>
        </form>
    );
};

export default CreateForm;
