export interface IBlueprint {
    id: string;
    name: string;
    category: string;
    sections: {
        name: string;
        description?: string;
        content?: any | any[];
    }[];
    aesthetic: string;
}
