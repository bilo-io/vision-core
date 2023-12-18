import { IEditorJSBlock } from "./documents";
export interface ILocation {
    id?: string;
    name: string;
    description?: string;
    images?: string[];
    blocks?: IEditorJSBlock[];
}
