export interface IResource {
    // unique identifier of the resource
    id?: string;
    // the name of the resource
    name: string;
    /** `galleryId`: the folder name in which this resource belongs */
    galleryId?: string;
    /** `projectId`: the project this resource belongs to */
    projectId: string | number;
}