import { type ResponseProps, type ResponseType } from "../../types";

import ChatMessage from "./ChatMessage";

interface ChatPanelProps extends ResponseProps {
    response: ResponseType;
}

export const ChatPanel = ({ chatter, response }: ChatPanelProps) => {
    const choice = response.choices[0];
    const chatMessage = choice.message.content;

    return (
        <div className="flex flex-col gap-4 pb-52 overflow-scroll max-h-screen custom-scroll">
            <ChatMessage chatter={chatter} message={chatMessage} isUserChatter={false} />
        </div>
    );
};

export default ChatPanel;
