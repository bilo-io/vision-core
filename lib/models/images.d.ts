import { IMediaType } from "./galleries";
export interface IImage {
    uri?: string;
    data?: string;
    /** `id`: the human friendly name of the Image */
    name?: string;
    /** `id`: the unique identifier of the Image */
    id: string;
    /** `projectId`: the project this Image belongs to */
    projectId: string | number;
    /** `galleryId?`: the gallery this Image belongs to */
    galleryId?: string | number;
    /** `type`:  */
    type: IMediaType;
}
//# sourceMappingURL=images.d.ts.map