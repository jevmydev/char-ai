import { type ResponseProps } from "../../types";

interface ChatMessageProps extends ResponseProps {
    isUserChatter?: boolean;
}

export const ChatMessage = ({ chatter, message, isUserChatter }: ChatMessageProps) => {
    const isUserChatterOrderClass = isUserChatter ? "order-1" : "-order-1";
    const isUserChatterBgClass = isUserChatter ? "bg-zinc-950" : "bg-green-800";

    return (
        <article className={`${isUserChatterBgClass} flex gap-4 p-4 rounded-md text-zinc-300`}>
            <aside className={isUserChatterOrderClass}>
                <img className="rounded-2xl w-52 object-fill" src={chatter.image} alt={`Imagen de ${chatter.name}`} />
            </aside>
            <section>
                <p>{message}</p>
            </section>
        </article>
    );
};

export default ChatMessage;
