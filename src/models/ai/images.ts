import { IMediaType } from "../galleries";
import { IResource } from "../resource";

export interface IImage extends IResource {
    uri?: string;
    data?: string;
    type: IMediaType;
}