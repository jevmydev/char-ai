import { useParams } from "react-router-dom";

export const ChatPage = () => {
    const { character } = useParams();

    return <section>{character}</section>;
};

export default ChatPage;
