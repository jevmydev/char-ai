import { createContext, useState } from "react";
import { type CharactersType } from "../types";

interface ChatterProviderProps {
    children: React.ReactNode;
}

interface ChatterStateType {
    chatter: CharactersType | any;
    setChatter: React.Dispatch<React.SetStateAction<CharactersType | null>> | any;
}

export const ChatterContext = createContext<ChatterStateType | null>(null);

export const ChatterProvider = ({ children }: ChatterProviderProps) => {
    const [chatter, setChatter] = useState<ChatterStateType | null>(null);

    return (
        <ChatterContext.Provider
            value={{
                chatter,
                setChatter
            }}
        >
            {children}
        </ChatterContext.Provider>
    );
};
