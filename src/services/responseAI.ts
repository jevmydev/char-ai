import { OPENAI_URL } from "../constants";
import { type ResponseProps, type ResponseType } from "../types";

const OPENAI_OPTIONS = ({ chatter, message }: ResponseProps) => ({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_APIKEY}`
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: `Eres ${chatter.name}. Tienes que comportarte como si fueras el personaje ante un prompt del usuario. Estas en un chat conversando. La descripción del personaje es ${chatter.description}`
            },
            {
                role: "user",
                content: message
            }
        ],
        temperature: 0.7,
        max_tokens: 256
    })
});

export const responseAI = ({ chatter, message }: ResponseProps): Promise<ResponseType> => {
    return fetch(OPENAI_URL, OPENAI_OPTIONS({ chatter, message }))
        .then((res) => res.json())
        .then((response) => response);
};
