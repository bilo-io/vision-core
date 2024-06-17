export interface IResource {
    id?: string;
    name: string;
    /**
     * `dateCreated`: is the date this resource was created
     */
    dateCreated?: string | Date;
    /**
     * `dateUpdated`: is the date this resource was updated
     */
    dateUpdated?: string | Date;
}
export interface IProjectResource extends IResource {
    /** `galleryId`: the folder name in which this resource belongs */
    galleryId?: string;
    /** `projectId`: the project this resource belongs to */
    projectId: string | number;
}
