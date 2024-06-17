import { IMediaType } from "../galleries";
import { IProjectResource } from "../resource";
export interface IImage extends IProjectResource {
    uri?: string;
    data?: string;
    type: IMediaType;
}
