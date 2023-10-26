import { IMediaType } from "./galleries";
export interface IImage {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}
