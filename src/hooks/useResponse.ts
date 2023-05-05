import { useState } from "react";
import { responseAI } from "../services/responseAI";
import { type ResponseProps, type ResponseType } from "../types";

export const useResponseIA = () => {
    const [response, setResponse] = useState<ResponseType | null>();

    const getResponse = async ({ chatter, message }: ResponseProps) => {
        try {
            const newResponse = await responseAI({ chatter, message });
            setResponse(newResponse);
        } catch (err) {
            throw new Error(`Response IA: ${err}`);
        }
    };

    return { response, getResponse };
};
