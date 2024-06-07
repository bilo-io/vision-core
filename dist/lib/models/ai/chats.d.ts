import { IResource } from "../resource";
export interface IChat extends IResource {
    messages: IChatMessage[];
}
export interface IChatMessage {
    sender: IChatSender;
    message: string;
}
export type IChatSender = 'USER' | 'SYSTEM';
