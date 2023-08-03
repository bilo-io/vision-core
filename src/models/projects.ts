export interface IProject {
    /** `id`: the unique identifier of the Project */
    id: string | number;
    /** `name`:  the name of the project */
    name: string;
    /** `sections`:  the various sections the project has */
    sections: Section[];
    /** `templateId?`:  the optional template from which the project was created*/
    templateId?: string | number;
    /** `collectionId?`:  the optional collection the project belongs to */
    collectionId?: string | number;
    /** `userPrompt?`:  */
    userPrompt?: string;
}

export interface Section {
    name: string;
    type: 'Text' | 'Image' | 'Audio' | 'Video';
    data: any;
    displayOrder: number;
    children?: Section[];
}
