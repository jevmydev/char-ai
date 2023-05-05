import { Navigate } from "react-router-dom";
import { useChatter } from "../hooks/useChatter";

import Chat from "../components/Chat/Chat";

export const ChatPage = () => {
    const { chatter } = useChatter();
    return chatter ? <Chat /> : <Navigate to={"/"} />;
};

export default ChatPage;
