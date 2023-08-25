export interface IProject {
    /** `id`: the unique identifier of the Project */
    id: string | number;
    /** `name`:  the name of the project */
    name: string;
    /** `sections`:  the various sections the project has */
    documents: {
        id: string | number;
        name: string;
        data: any;
        type?: string | 'text' | 'gallery' | 'slides';
    }[];
}
