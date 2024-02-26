import { IMediaType } from "./galleries";
export type IDialogueTone = 'SAD' | 'HAPPY' | 'ANGRY' | 'CALM' | 'EXCITED' | 'SERIOUS' | 'PLAYFUL' | 'CONFUSED' | 'GRATEFUL' | 'LOVING' | 'HUMOROUS' | 'SARCASTIC' | 'APOLOGETIC' | 'ENCOURAGING' | 'THOUGHTFUL' | 'FRIGHTENED' | 'SURPRISED' | 'DISAPPOINTED' | 'AMUSED' | 'ANXIOUS' | 'GRUMPY' | 'HOPEFUL';
export type IDialogueEmotion = 'JOY' | 'SADNESS' | 'ANGER' | 'FEAR' | 'SURPRISE' | 'DISGUST' | 'ANTICIPATION';
export type IDialogueIntent = 'STATEMENT' | 'QUESTION' | 'COMMAND' | 'REQUEST' | 'EXCLAMATION' | 'APOLOGY' | 'THANKS';
export type IDialogueGesture = 'SMILE' | 'LAUGH' | 'CRY' | 'SHRUG' | 'NOD' | 'SHAKE HEAD' | 'WAVE' | 'POINT' | 'CLAP' | 'SIGH' | 'HUG' | 'HANDSHAKE' | 'APPLAUSE' | 'THUMBS UP' | 'THUMBS DOWN' | 'FIST PUMP';
export interface IDialogue {
    /** `id`: the unique identifier of the Dialogue */
    id: string;
    /** `id`: the human-friendly name of the Dialogue */
    name?: string;
    type: IMediaType;
    actors?: {
        id: string;
        name: string;
        image: string | any;
        voice?: string;
    }[];
    data?: IDialogueLine[];
    /** `projectId`: the project this Document belongs to */
    projectId: string | number;
    /** `galleryId?`: the gallery this Document belongs to */
    galleryId?: string | number;
}
export interface IDialogueLine {
    text: string;
    delay?: number;
    actorId: string;
    tone?: IDialogueTone;
    emotion?: IDialogueEmotion;
    intent?: IDialogueIntent;
    gesture?: IDialogueGesture;
    language?: string;
    subtext?: string;
    context?: string;
    action?: string;
}
