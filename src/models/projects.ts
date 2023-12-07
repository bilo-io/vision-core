export interface IProject {
    /** `id`: the unique identifier of the Project */
    id: string | number;
    /** `name`:  the human-friendly name of the project */
    name: string;
    /** `a project image`:  the various sections the project has */
    image?: string;
    /**`a list of features`: the sidebar tabs offered by vision studio */
    features?: string[];
    /** `a project summary`: */
    executiveSummary: string;
}
