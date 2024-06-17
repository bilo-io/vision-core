import { IProjectResource } from "../resource";

export interface IChat extends IProjectResource {
    messages: IChatMessage[],
}

export interface IChatMessage {
    sender: IChatSender,
    message: string;
}

export type IChatSender = 'USER' | 'SYSTEM'