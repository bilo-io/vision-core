export interface IImage {
    uri?: string;
    data?: string;
    name?: string;
    id: string;
}
export interface ISound {
    uri?: string;
    data?: string;
    name?: string;
    id: string;
}
export interface IVideo {
    uri?: string;
    data?: string;
    name?: string;
    id: string;
}
export interface IGallery {
    id: string;
    name: string;
    media: IImage[] | ISound[] | IVideo[];
}
