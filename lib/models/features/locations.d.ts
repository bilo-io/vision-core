import { IEditorJSBlock } from "./documents";
import { IProjectResource } from "../resource";
export interface ILocation extends IProjectResource {
    description?: string;
    lore?: string;
    plot?: string;
    images?: string[];
    blocks?: IEditorJSBlock[];
}
