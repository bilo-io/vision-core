export interface IImage {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}
export interface ISound {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}
export interface IVideo {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}
export type IMediaType = 'Image' | 'Sound' | 'Video' | 'Dialogue';
export interface IMedia {
    uri?: string;
    data?: string;
    name?: string;
    type: IMediaType;
    id: string;
}
export interface IDialogue {
    id: string;
    name?: string;
    actors?: {
        id: string;
        name: string;
        image: string | any;
        voice?: string;
    }[];
    data?: {
        text: string;
        delay?: number;
        actorId: string;
    }[];
}
export interface IGallery {
    id: string;
    name: string;
    type: IMediaType;
    media: IImage[] | ISound[] | IVideo[] | IDialogue[];
}
