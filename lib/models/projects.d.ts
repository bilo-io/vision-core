import { IResource } from "./resource";
export interface IProject extends IResource {
    /** `ref`: the unique ref to the Project */
    ref?: string;
    /** `templateId`: the template from which this project was generated  */
    templateId?: string;
    /** `audio`: is a selection of songs to give a flavour of the soundtrack */
    soundtrack?: {
        /** `url`: the path to the audio file */
        url: string;
        /** `name`: the display name of the audio file */
        name: string;
        /** `duration`: the length of the audio file in seconds */
        duration?: number;
    };
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
export type IProjectPlatform = 'playstation' | 'nintendo' | 'xbox' | 'windows' | 'android' | 'apple' | 'ios' | string;
export type IProjectTechnology = 'unrealengine' | 'unity' | 'godot' | 'gamemaker' | 'cryengine' | 'gdevelop' | string;
