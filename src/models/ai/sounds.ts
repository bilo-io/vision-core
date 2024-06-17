import { IMediaType } from "../galleries";
import { IProjectResource } from "../resource";

export interface ISound extends IProjectResource {
    uri?: string;
    data?: string;
    type: IMediaType;
}