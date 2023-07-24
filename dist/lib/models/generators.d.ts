export type IGeneratorType = 'Audio' | 'Image' | 'Text' | 'Video';
export interface IGenerator {
    id?: string;
    name: string;
    type: IGeneratorType;
    website: string;
    apiDocsUrl?: string;
    apiBaseUrl?: string;
    properties?: {
        [key in string]: string;
    };
}
