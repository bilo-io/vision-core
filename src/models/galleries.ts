import { ICharacter } from "./characters";
import { IDialogue } from "./dialogues";
import { IDocument } from "./documents";

import { IImage } from "./images";
import { ISound } from "./sounds";
import { IVideo } from "./videos";

export type IMediaType =
    'Character' |
    'Dialogue' |
    'Document' |
    'Image' |
    'Sound' |
    'Video';

export interface IMedia {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}

export interface IGallery {
    /** `id`: the unique identifier of the Gallery */
    id: string;
    /** `id`: the human friendly name of the Gallery */
    name: string;
    type: IMediaType;
    /** `projectId`: the project this Document belongs to */
    projectId: string | number;
    media:
        ICharacter[] |
        IDocument[] |
        IDialogue[] |
        IImage[] |
        ISound[] |
        IVideo[];
}
