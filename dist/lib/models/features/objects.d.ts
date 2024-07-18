import { IEditorJSBlock } from "./documents";
import { IProjectResource } from "../resource";
export interface IObjects extends IProjectResource {
    name: string;
    description?: string;
    type: IObjectType;
    value?: string;
    weight?: string;
    material?: string;
    images?: string[];
    lore?: string;
    plot?: string;
    blocks?: IEditorJSBlock[];
    abilities?: string[];
}
export type IObjectType = 'WEAPON' | // swords, guns, etc.
'EQUIPMENT' | // armor, tools, etc.
'LOOT' | // treasure, collectibles, etc.
'CURRENCY' | // coins, gems, etc.
'MISC';
