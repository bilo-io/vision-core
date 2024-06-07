export interface IResource {
    id?: string;
    name: string;
    /** `galleryId`: the folder name in which this resource belongs */
    galleryId?: string;
    /** `projectId`: the project this resource belongs to */
    projectId: string | number;
}
