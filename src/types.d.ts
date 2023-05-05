export interface CharactersType {
    id?: string;
    name: string;
    description: string;
    image: string;
}

export type CharactersArrayType = Array<CharactersType>;

export interface ResponseProps {
    chatter: CharactersType;
    message?: string;
}

export interface ResponseMessage {
    role: string;
    content: string;
}

export interface ResponseChoices {
    message: ResponseMessage;
}

export interface ResponseType {
    choices: Array<ResponseChoices>;
}
