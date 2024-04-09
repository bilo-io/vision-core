export interface IUser {
    id?: string | number;
    /** the display name of the user */
    name?: string;
    /** the SSO auth method used by the user */
    authMethod: 'Email' | 'Google' | 'Facebook' | 'Apple';
    /** the profile picture of the user */
    image?: string;
    /**  email address of the user, retrieved from the SSO method */
    email?: string;
    /** whether or not that email address has been verified by the user */
    emailVerified?: boolean;
    /** the access token used for the session */
    token?: string;
    /** indicates whether the user isAdmin */
    isAdmin?: boolean;
}