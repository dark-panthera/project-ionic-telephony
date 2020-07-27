export interface Subscriptions {
    subscriptions: Subscription[];
}

export interface Subscription {
    id: number;
    name: string;
    type: string;
}
// https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions
//https://selfcare-service.demo.melita.com/interview/api/offers