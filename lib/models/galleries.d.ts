import { ICharacter } from "./characters";
import { IDialogue } from "./dialogues";
import { IDocument } from "./documents";
import { IImage } from "./images";
import { ISound } from "./sounds";
import { IVideo } from "./videos";
export type IMediaType = 'Character' | 'Dialogue' | 'Document' | 'Image' | 'Sound' | 'Video';
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
    media: ICharacter[] | IDocument[] | IDialogue[] | IImage[] | ISound[] | IVideo[];
}
