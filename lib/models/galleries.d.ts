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
export type IMediaType = 'Image' | 'Sound' | 'Video';
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
    media: IImage[] | ISound[] | IVideo[];
}
