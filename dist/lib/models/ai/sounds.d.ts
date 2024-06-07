import { IMediaType } from "../galleries";
import { IResource } from "../resource";
export interface ISound extends IResource {
    uri?: string;
    data?: string;
    type: IMediaType;
}
