import { ISubscription } from "./subscriptions";
export interface ITenant {
    id: string;
    name: string;
    image?: string;
    subscription?: ISubscription;
}
