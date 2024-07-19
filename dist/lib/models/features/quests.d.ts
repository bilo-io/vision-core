import { ICharacter, IEditorJSBlock, ILocation, ICreature, ITransport, IObject } from '../';
import { IProjectResource } from '../resource';
export interface IQuest extends IProjectResource {
    title: string;
    description: string;
    lore?: string;
    plot: string;
    characters?: ICharacter[];
    locations?: ILocation[];
    creatures?: ICreature[];
    transports?: ITransport[];
    objects?: IObject[];
    status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';
    reward?: string;
    images?: string[];
    blocks?: IEditorJSBlock[];
}
