import { IMediaType } from "./galleries";

export interface ISound {
    uri?: string;
    data?: string;
    /** `id`: the unique identifier of the Sound */
    id: string;
    /** `id`: the human friendly name of the Sound */
    name: string;
    type: IMediaType;
    /** `projectId`: the project this Sound belongs to */
    projectId: string | number;
    /** `galleryId?`: the gallery this Sound belongs to */
    galleryId?: string | number;
}