import { IResource } from "./resource";
import { IUserSubscription } from "./subscriptions";
export type AuthMethod = 'Email' | 'Google' | 'Facebook' | 'Apple' | 'Github';
export interface IUser extends IResource {
    authMethod: AuthMethod;
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
    /** the `subscription` of the `user` */
    subscription?: IUserSubscription;
}
