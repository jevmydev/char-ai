import Input from "../../elements/Input";
import Button from "../../elements/Button";

interface ChatPromptProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ChatPrompt = ({ onSubmit }: ChatPromptProps) => {
    return (
        <div className="absolute w-full bottom-0 z-10 bg-zinc-900">
            <form className="flex items-center w-full" onSubmit={onSubmit}>
                <Input placeholder="Escribe aquí..." name="message" />
                <Button title="Enviar mensaje" isActive>
                    Enviar
                </Button>
            </form>
        </div>
    );
};

export default ChatPrompt;
