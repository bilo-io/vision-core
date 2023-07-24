export interface IBlueprint {
    // unique identifier of the blueprint
    id: string;
    // the name of the document
    name: string;
    // the type of the document
    category: string;
    // a list of the different high-level sections
    sections: {
        name: string;
        description?: string;
        content?: any | any[];
    }[];
    // description for the look and feel
    aesthetic: string;
}