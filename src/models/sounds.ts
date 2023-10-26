import { IMediaType } from "./galleries";

export interface ISound {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}