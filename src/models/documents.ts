export interface IDocument {
    /** `id`: the unique identifier of the Document */
    id: string | number;
    /** `name`:  the human-friendly name of the Document */
    name: string;
    /** `sections`:  the various sections the document has */
    sections?: Section[];
    /** `sectionCount`: the number of sections when the document gets returned in a list */
    sectionCount?: number;
    /** `templateId?`:  the optional template from which the document was created*/
    templateId?: string | number;
    /** `collectionId?`:  the optional collection the document belongs to */
    collectionId?: string | number;
    /** `userPrompt?`:  */
    userPrompt?: string;
    /** `projectId`: the project this Document belongs to */
    projectId: string | number;
    /** `galleryId?`: the gallery this Document belongs to */
    galleryId?: string | number;
}

export interface Section {
    name: string;
    type: 'Text' | 'Image' | 'Audio' | 'Video';
    data: any;
    displayOrder: number;
    children?: Section[];
}