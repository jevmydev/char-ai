import { useContext } from "react";
import { ChatterContext } from "../context/chatter";

export const useChatter = () => {
    const chatterContext = useContext(ChatterContext);
    if (!chatterContext) throw new Error("useChatter no tiene acceso al provider chatter");

    return chatterContext;
};
