export interface IBlueprint {
    // unique identifier of the lication
    id: string;
    // the name of the location
    name: string;
    // the description of the location
    description?: string;
    // the images to identify the location
    images?: string[];
}