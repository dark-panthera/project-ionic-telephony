export interface Offers {
    offers: Offer[];
}

export interface Offer {
    id: number;
    name: string;
    contractEndDate: string;
    contractStartDate: string;
}
// https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions
//https://selfcare-service.demo.melita.com/interview/api/offers