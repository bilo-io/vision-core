import { IEditorJSBlock } from "./documents";
import { IProjectResource } from "../resource";

export interface IObjects extends IProjectResource {
    // the name of the object
    name: string;
    // the description of the object
    description?: string;
    // type of object
    type: IObjectType;
    // value or cost of the object
    value?: string;
    // weight of the object
    weight?: string;
    // material or composition of the object
    material?: string;
    // images to identify the object
    images?: string[];
    // lore of the object, as a background to provide context
    lore?: string;
    // plot of the object, significant to the game/story
    plot?: string;
    // an array of EditorJS blocks for arbitrary editing
    blocks?: IEditorJSBlock[];
    // any special abilities or effects
    abilities?: string[];
};

export type IObjectType =
    'WEAPON' | // swords, guns, etc.
    'EQUIPMENT' | // armor, tools, etc.
    'LOOT' | // treasure, collectibles, etc.
    'CURRENCY' | // coins, gems, etc.
    'MISC'; // any other objects
