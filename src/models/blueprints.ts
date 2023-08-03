export interface IBlueprint {
    /** `id`: unique identifier of the blueprint */
    id: string,
    /** `name`: the name of the document */
    name: string,
    /** `category`: the type of the document */
    category?: string,
    /** `content`: a simple description of the template */
    content?: string, 
    /** `sections`: a list of the different high-level sections */
    sections?: {
        name: string,
        description?: string,
        content?: any | any[],
    }[],
    /** `aesthetic?`: description for the look and feel */
    aesthetic?: string,
}
