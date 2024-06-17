import { IMediaType } from "../galleries";
import { IProjectResource } from "../resource";

// Custom types for additional properties
export type IDialogueTone = 'SAD' | 'HAPPY' | 'ANGRY' | 'CALM' | 'EXCITED' | 'SERIOUS' | 'PLAYFUL' | 'CONFUSED' | 'GRATEFUL' | 'LOVING' | 'HUMOROUS' | 'SARCASTIC' | 'APOLOGETIC' | 'ENCOURAGING' | 'THOUGHTFUL' | 'FRIGHTENED' | 'SURPRISED' | 'DISAPPOINTED' | 'AMUSED' | 'ANXIOUS' | 'GRUMPY' | 'HOPEFUL';

export type IDialogueEmotion = 'JOY' | 'SADNESS' | 'ANGER' | 'FEAR' | 'SURPRISE' | 'DISGUST' | 'ANTICIPATION';

export type IDialogueIntent = 'STATEMENT' | 'QUESTION' | 'COMMAND' | 'REQUEST' | 'EXCLAMATION' | 'APOLOGY' | 'THANKS';

export type IDialogueGesture = 'SMILE' | 'LAUGH' | 'CRY' | 'SHRUG' | 'NOD' | 'SHAKE HEAD' | 'WAVE' | 'POINT' | 'CLAP' | 'SIGH' | 'HUG' | 'HANDSHAKE' | 'APPLAUSE' | 'THUMBS UP' | 'THUMBS DOWN' | 'FIST PUMP';

export interface IDialogue extends IProjectResource {
    type: IMediaType;
    actors?: {
        id: string;
        name: string;
        image: string | any;
        voice?: string;
    }[];
    data?: IDialogueLine[];
}

export interface IDialogueLine {
    text: string;            // The spoken text.
    delay?: number;          // An optional delay before displaying the dialogue (in milliseconds).
    actorId: string;        // The identifier of the character or actor delivering the dialogue.
    tone?: IDialogueTone;    // The emotional tone of the dialogue line.
    emotion?: IDialogueEmotion; // The specific emotion conveyed by the line.
    intent?: IDialogueIntent;   // The character's intent or purpose behind the dialogue.
    gesture?: IDialogueGesture; // Any accompanying physical gestures or actions.
    language?: string;      // The language or dialect used in the dialogue.
    subtext?: string;        // The underlying meaning or subtext of the dialogue.
    context?: string;       // The context or situation in which the dialogue occurs.
    action?: string;        // Any specific action associated with the dialogue.
    // TODO: Add any other relevant properties of a dialogue line.
}