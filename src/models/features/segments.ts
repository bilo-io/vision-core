import {
    ICharacter,
    IEditorJSBlock,
    ILocation,
    ICreature,
    ITransport,
    IObject,
} from '..';
import { IProjectResource } from '../resource';

export interface ISegment extends IProjectResource {
    // The title of the quest
    title: string;
    // A brief description of the quest
    description: string;
    // The lore or background story of the quest
    lore?: string;
    // The main plot or objectives of the quest
    plot: string;
    // Characters involved in the quest
    characters?: ICharacter[];
    // Locations where the quest takes place
    locations?: ILocation[];
    // Creatures encountered during the quest
    creatures?: ICreature[];
    // Transports used in the quest
    transports?: ITransport[];
    // Objects that are relevant to the quest
    objects?: IObject[];
    // The status of the quest (e.g., planned, in progress, completed)
    status?: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';
    // The reward for completing the quest
    reward?: string;
    // Images associated with the quest
    images?: string[];
    // An array of EditorJS blocks for arbitrary editing
    blocks?: IEditorJSBlock[];
}
