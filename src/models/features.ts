export interface IFeature {
    /** `key` is the identifier of the feature */
    key: string;
    /** `isActive` is a boolean to determine whether the feature is available or under maintenance */
    isActive: boolean;
    /** `message` is used during maintenance to display information when the feature is down */
    message: string;
}