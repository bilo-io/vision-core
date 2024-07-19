import { IEditorJSBlock } from "./documents";
import { IProjectResource } from "../resource";
export interface ITransport extends IProjectResource {
    description?: string;
    lore?: string;
    plot?: string;
    images?: string[];
    blocks?: IEditorJSBlock[];
    type: ITransportType;
    speed?: string;
    capacity?: number;
    fuelType?: string;
}
export type ITransportType = 'SKATE' | // roller blades, roller skates, skateboards, etc
'2_WHEEL' | // motorbikes, bicycles, etc
'4_WHEEL' | // cars, trucks, etc.
'AIR' | 'SPACE' | 'TIME' | 'SPACE_TIME' | 'PORTAL' | 'MISC';
