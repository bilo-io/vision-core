import { IEditorJSBlock } from "./documents";
import { IResource } from "../resource";
export interface ILocation extends IResource {
    description?: string;
    lore?: string;
    plot?: string;
    images?: string[];
    blocks?: IEditorJSBlock[];
}
