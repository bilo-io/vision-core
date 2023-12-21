import { IEditorJSBlock } from "./documents";

export interface ILocation {
    // unique identifier of the lication
    id?: string;
    // the name of the location
    name: string;
    // the description of the location
    description?: string;
    // the images to identify the location
    images?: string[];
    // an array of EditorJS blocks for arbitrary editing
    blocks?: IEditorJSBlock[];
}