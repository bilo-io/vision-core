export interface IChat {
    id?: string;
    name: string;
    messages: IChatMessage[];
}
export interface IChatMessage {
    sender: IChatSender;
    message: string;
}
export type IChatSender = 'USER' | 'SYSTEM';
