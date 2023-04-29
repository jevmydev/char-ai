import Input from "../../elements/Input";
import TextArea from "../../elements/TextArea";
import Button from "../../elements/Button";

interface CreateFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CreateForm = ({ onSubmit }: CreateFormProps) => {
    return (
        <form className="flex-1 flex flex-col gap-4 max-w-lg" onSubmit={onSubmit}>
            <label className="flex flex-col gap-4">
                ¿Cuál es el nombre de tu personaje?
                <Input type="text" placeholder="Albert Einstein." name="name" />
            </label>
            <label className="flex flex-col gap-4">
                Describe al personaje
                <TextArea placeholder="Científico más importante, conocido y popular del siglo XX." name="description" />
            </label>
            <Button title="Crea tu personaje" isActive>
                Visualiza tu personaje
            </Button>
        </form>
    );
};

export default CreateForm;
