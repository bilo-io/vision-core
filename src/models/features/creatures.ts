import { IEditorJSBlock } from "./documents";
import { IProjectResource } from "../resource";

export interface ICreature extends IProjectResource {
    // the name of the creature
    name: string;
    // the description of the creature
    description?: string;
    // habitat of the creature
    habitat?: string;
    // diet of the creature
    diet?: string;
    // behaviour or traits of the creature
    behaviour?: string;
    // abilities or special powers
    abilities?: string[];
    // images to identify the creature
    images?: string[];
    // lore of the creature, as a background to provide context
    lore?: string;
    // plot of the creature, significant to the game/story
    plot?: string;
    // an array of EditorJS blocks for arbitrary editing
    blocks?: IEditorJSBlock[];
    // type of creature
    type: ICreatureType;
};

export type ICreatureType =
    'MAMMAL' |
    'BIRD' |
    'FISH' |
    'REPTILE' |
    'AMPHIBIAN' |
    'INSECT' |
    'MYTHICAL' |
    'ALIEN' |
    'OTHER';
