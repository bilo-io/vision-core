import { IMediaType } from "./galleries";
export interface IVideo {
    uri?: string;
    data?: string;
    /** `id`: the unique identifier of the Video */
    id: string;
    /** `id`: the human friendly name of the Video */
    name?: string;
    type: IMediaType;
    /** `projectId`: the project this Video belongs to */
    projectId: string | number;
    /** `galleryId?`: the gallery this Video belongs to */
    galleryId?: string | number;
}
