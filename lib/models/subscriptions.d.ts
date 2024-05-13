export type SubscriptionType = 'FREE' | 'PERSONAL' | 'PRO' | 'PROPHET';
export type SubscriptionPeriod = 'MONTHLY' | 'YEARLY';
export interface ISubscription {
    /** `id`: the unique identifier of the customer subscription */
    id: string;
    /** `name`: the name of the subscription */
    name: string;
    /** `type`: the type of the subscription.
     * one of type: `'FREE'` | `'PERSONAL'` | `'PRO'` | `'PROPHET'`
     */
    type: SubscriptionType;
    /** `period`: the period of the subscription.
     * one of type: `'MONTHLY'` | `'YEARLY'`
     */
    period: SubscriptionPeriod;
    /** `startDate`: the starting date of the subscription  */
    startDate?: string;
    /** `endDate`: the expiry/end date of the subscription  */
    endDate?: string;
    /** the available `credits` the customer has on their subscription */
    credits?: number;
}
//# sourceMappingURL=subscriptions.d.ts.map