import { IResource } from "./resource";
import { IUserSubscription } from "./subscriptions";
import { IUser } from "./users";
export interface IPermission {
    permissions?: {
        /**
         * `access` determines the general access level for users:
         * - `read`: means the respective user has `read-only` access, and cannot `write` or `delete` anything
         * - `write`: means the respective user can `read` and `write` data
         * - `delete`: means the respective user can `read`, `write` and `delete resources.
         * - `admin`: means the respective user has all access levels, and can also modify the workspace.
         * */
        access?: 'read' | 'write' | 'delete' | 'admin';
    } & {
        [key in string]: string;
    };
}
export interface IWorkspace extends IResource {
    /** `image`: associated with this workspace */
    image?: string;
    /** `owner`: is essentially the `creator` of the workspace. Should transferrability be a feature, then ownership could be transfered to someone other than the original creator */
    owner?: string;
    /** `users`: that have access to this workspace */
    users: (IUser & IPermission)[];
    /** `isPublic`: grants public visibility of this workspace and all its projects */
    isPublic?: boolean;
    /** `subscription`: is applied from the `user` account of the workspace `owner` */
    subscription?: IUserSubscription;
}
