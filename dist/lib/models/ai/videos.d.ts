import { IMediaType } from "../galleries";
import { IProjectResource } from "../resource";
export interface IVideo extends IProjectResource {
    uri?: string;
    data?: string;
    type: IMediaType;
}
