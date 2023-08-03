export type SubscriptionType = 'FREE' | 'PERSONAL' | 'PRO' | 'PROPHET';
export interface ISubscription {
    /** `id`: the unique identifier of the customer subscription */
    id: string;
    /** `name`: the name of the subscription */
    name: string;
    /** `type`: the type of the subscription
     *
     * one of type: `'FREE'` | `'PERSONAL'` | `'PRO'` | `'PROPHET'`
     */
    type: string;
    /** `startDate`: the starting date of the subscription  */
    startDate?: string;
    /** `endDate`: the expiry/end date of the subscription  */
    endDate?: string;
}
