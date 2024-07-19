import { IEditorJSBlock } from "./documents";
import { IProjectResource } from "../resource";

export interface ITransport extends IProjectResource {
    // the description of the vehicle
    description?: string;
    // lore of the transports, as a background to provide context
    lore?: string;
    // plot of the transport, significant to the game/story
    plot?: string;
    // the images to identify the transport
    images?: string[];
    // an array of EditorJS blocks for arbitrary editing
    blocks?: IEditorJSBlock[];
    // type of transport
    type: ITransportType;
    // speed of the transport in appropriate units
    speed?: string;
    // capacity of the transport
    capacity?: number;
    // fuel type or energy source
    fuelType?: string;
};

export type ITransportType =
    'SKATE' | // roller blades, roller skates, skateboards, etc
    '2_WHEEL' | // motorbikes, bicycles, etc
    '4_WHEEL' | // cars, trucks, etc.
    'AIR' |
    'SPACE' |
    'TIME' |
    'SPACE_TIME' |
    'PORTAL' |
    'MISC';
