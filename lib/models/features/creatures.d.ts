import { IEditorJSBlock } from "./documents";
import { IProjectResource } from "../resource";
export interface ICreature extends IProjectResource {
    name: string;
    description?: string;
    habitat?: string;
    diet?: string;
    behavior?: string;
    abilities?: string[];
    images?: string[];
    lore?: string;
    plot?: string;
    blocks?: IEditorJSBlock[];
    type: ICreatureType;
}
export type ICreatureType = 'MAMMAL' | 'BIRD' | 'FISH' | 'REPTILE' | 'AMPHIBIAN' | 'INSECT' | 'MYTHICAL' | 'ALIEN' | 'OTHER';
