import { IEditorJSBlock } from "./documents";
export interface ILocation {
    id?: string;
    name: string;
    description?: string;
    lore?: string;
    plot?: string;
    images?: string[];
    blocks?: IEditorJSBlock[];
}
