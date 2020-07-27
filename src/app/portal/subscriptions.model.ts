export interface Subscriptions {
    subscriptions: SubscriptionModel[];
}

export interface SubscriptionModel {
    id: number;
    name: string;
    type: string;
}
// https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions
//https://selfcare-service.demo.melita.com/interview/api/offers