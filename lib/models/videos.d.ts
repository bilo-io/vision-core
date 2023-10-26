import { IMediaType } from "./galleries";
export interface IVideo {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}
