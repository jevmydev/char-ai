import { useChatter } from "../../hooks/useChatter";
import { useResponseIA } from "../../hooks/useResponse";

import ChatPanel from "./ChatPanel";
import ChatPrompt from "./ChatPrompt";

export const Chat = () => {
    const { response, getResponse } = useResponseIA();
    const { chatter } = useChatter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const message = formData.get("message")?.toString() || "";

        getResponse({ chatter, message });
        e.currentTarget.reset();
    };

    return (
        <section>
            <div className="max-w-screen-md mx-auto p-4 pt-24 min-h-screen max-h-screen relative">
                <h2 className="font-bold text-zinc-500 pb-4">Chat con {chatter.name}</h2>
                {response && <ChatPanel chatter={chatter} response={response} />}
                <ChatPrompt onSubmit={handleSubmit} />
            </div>
        </section>
    );
};

export default Chat;
