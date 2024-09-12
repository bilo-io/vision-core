import { IResource } from "./resource";
import { IUserSubscription } from "./subscriptions";
export type AuthMethod = 'Email' | 'Google' | 'Facebook' | 'Apple' | 'Github';
export interface IUser extends IResource {
    authMethod: AuthMethod;
    /**  `email`: the email address of the user, retrieved from the SSO method */
    email?: string;
    /** `emailVerified`: whether or not that email address has been verified by the user */
    emailVerified?: boolean;
    /** `token`: the access token used for the session */
    token?: string;
    /** `image`: the profile picture of the user */
    image?: string;
    /** `isAdmin`: indicates whether the user isAdmin */
    isAdmin?: boolean;
    /** `subscription`: the `subscription` of the `user` */
    subscription?: IUserSubscription;
    /** `preferences`: the user-preferred configurations of the application */
    preferences?: {
        language: string;
        theme: string;
    };
    /** `region`: the region information of the user */
    region?: {
        latitude?: number;
        longitude?: number;
        country?: string;
        city?: string;
        currencies?: string[];
    };
}
