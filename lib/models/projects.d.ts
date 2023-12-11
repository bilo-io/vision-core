export interface IProject {
    /** `id`: the unique identifier of the Project */
    id: string | number;
    /** `name`:  the human-friendly name of the project */
    name: string;
    /** `image`:  the image of a project (to be `deprecated`) */
    image?: string;
    /** `images`?:  the various different images of a projec, like an app store page  */
    images?: {
        /** `coverImage` used to show the general splash/cover/background art */
        coverImage: string;
        /**  `thumbImage` is the image of the thumbnail */
        thumbImage: string;
        /**  `titleImage` is to render the game title in a specific image (custom artwork) */
        titleImage: string;
        /** `slides` are general images to show in the slideshow */
        slides?: string[];
        /** `thumbAlign` translates to `background-position` CSS property */
        thumbAlign: string;
    };
    /**`a list of features`: the sidebar tabs offered by vision studio */
    features?: string[];
    /** `a project summary`: */
    executiveSummary: string;
}
