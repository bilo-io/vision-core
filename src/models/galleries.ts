import { IImage } from "./images";
import { ISound } from "./sounds";
import { IVideo } from "./videos";
import { ICharacter } from "./characters";
import { IDialogue } from "./dialogues";

export type IMediaType = 'Image' | 'Sound' | 'Video' | 'Dialogue' | 'Character'

export interface IMedia {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}

export interface IGallery {
    id: string;
    name: string;
    type: IMediaType;
    media: IImage[] | ISound[] | IVideo[] | IDialogue[] | ICharacter[];
}
