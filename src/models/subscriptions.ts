export type SubscriptionType = 'FREE' | 'PROFESSIONAL' | 'PREMIUM' | 'ENTERPRISE';
export type SubscriptionPeriod = 'MONTHLY' | 'YEARLY';

export interface ISubscription {
    /** 
     * ### ID
     * The unique identifier of the customer subscription 
     */
    id: string;

    /** 
     * ### Name
     * The name of the subscription 
     */
    name: string;

    /** 
     * ### Type
     * The type of the subscription.
     * One of:
     * - `'FREE'`
     * - `'PROFESSIONAL'`
     * - `'PREMIUM'`
     * - `'ENTERPRISE'`
     */
    type: SubscriptionType;

    /** 
     * ### Period
     * The period of the subscription.
     * One of:
     * - `'MONTHLY'`
     * - `'YEARLY'`
     */
    period: SubscriptionPeriod;

    /** 
     * ### Start Date
     * The starting date of the subscription 
     */
    startDate?: string;

    /** 
     * ### End Date
     * The expiry/end date of the subscription 
     */
    endDate?: string;

    /** 
     * ### Credits
     * The available credits the customer has on their subscription 
     */
    credits?: number;

    /** 
     * ### Limits
     * The limitations for each feature 
     */
    limits: ISubscriptionLimits;
}


export interface ISubscriptionLimits {
    /** 
     * ### limits.WORKSPACES
     * Maximum number of workspaces a user can create 
     */
    WORKSPACES: number,

    /** 
     * ### limits.PROJECTS
     * Maximum number of projects a user can create within a workspace 
     */
    PROJECTS: number,

    /** 
     * ### limits.COLLABORATORS
     * Maximum number of collaborators in a project 
     */
    COLLABORATORS: number,

    /** 
     * ### limits.CHARACTERS
     * Limit per project
     */
    CHARACTERS: number,

    /** 
     * ### limits.DIALOGUES
     * Limit per project
     */
    DIALOGUES: number,

    /** 
     * ### limits.DOCUMENTS
     * Limit per project
     */
    DOCUMENTS: number,

    /** 
     * ### limits.LOCATIONS
     * Limit per project
     */
    LOCATIONS: number,

    /** 
     * ### limits.CONTROLS
     * Limit per project
     */
    CONTROLS: number,

    /** 
     * ### limits.GRAPHS
     * Limit per project
     */
    GRAPHS: number,

    /** 
     * ### limits.AI Text Generation
     * Limit for the AI-generated text media
     */
    AI_TEXT_GENERATION: number,

    /** 
     * ### limits.AI Image Generation
     * Limit for the AI-generated image media
     */
    AI_IMAGE_GENERATION: number,

    /** 
     * ### limits.AI Audio Generation
     * Limit for the AI-generated audio media
     */
    AI_AUDIO_GENERATION: number,

    /** 
     * ### limits.AI Video Generation
     * Limit for the AI-generated video media
     */
    AI_VIDEO_GENERATION: number,

    /** 
     * ### limits.AI 3D Model Generation
     * Limit for the AI-generated 3D model media
     */
    AI_3D_MODEL_GENERATION: number
}
