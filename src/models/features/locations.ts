import { IEditorJSBlock } from "./documents";
import { IResource } from "../resource";

export interface ILocation extends IResource {
    // the description of the location
    description?: string;
    // lore of the location, as a background to provide context
    lore?: string;
    // plot of the location, significant to the game/story
    plot?: string;
    // the images to identify the location
    images?: string[];
    // an array of EditorJS blocks for arbitrary editing
    blocks?: IEditorJSBlock[];
};