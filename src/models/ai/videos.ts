import { IMediaType } from "../galleries";
import { IResource } from "../resource";

export interface IVideo extends IResource {
    uri?: string;
    data?: string;
    type: IMediaType;
}