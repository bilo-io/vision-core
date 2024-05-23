export interface IProject {
    /** `id`: the unique identifier of the Project */
    id: string | number;
    /** `ref`: the unique ref to the Project */
    ref?: string;
    /** `name`:  the human-friendly name of the project */
    name: string;
    /** `audio`: is a selection of songs to give a flavour of the soundtrack */
    audio?: {
        /** `theme` is the classic song of this project */
        theme?: string;
        /** `action` is the normal combat music */
        action?: string;
        /** `epic` is usually the soundtrack for a boss battle of sorts, more elevated than `action` music */
        epic?: string;
        /** `explore` is the background music when exploring */
        explore?: string;
        /** `idle`: is the background music when in a safe zone */
        idle?: string;
        /** `tactical` is a soundtrack that could be used for a planning or stealth phase */
        tactical?: string;
    };
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
    /** content rating, indicating the minimum maturity level required to consume this media */
    contentRating?: {
        age: number;
        hasNudity: boolean;
        hasSex: boolean;
        hasViolence: boolean;
        hasLanguage: boolean;
        isRRated: boolean;
        hasDrugUse: boolean;
        hasAlcoholUse: boolean;
        hasGambling: boolean;
        hasScaryElements: boolean;
        hasOnlineInteractions: boolean;
    };
    /** the `platforms` on which the final media will be consumable  */
    targetPlatforms?: IProjectPlatform[];
    /** the `technologies` used to create the final media  */
    technologies?: IProjectTechnology[];
}
export type IProjectPlatform = 'unity' | 'godot' | 'apple' | 'ios' | 'android' | 'windows' | 'xbox' | 'nintendo' | 'switch' | string;
export type IProjectTechnology = IProjectPlatform | string;
