import { FrequentFlyer } from "./FrequentFlyer";


export class Passenger {
    private name: string;
    private creditCard: string;
    private frequentFlyer: FrequentFlyer;
    constructor(name: string, creditCard: string)
    {
        this.name = name
        this.creditCard = creditCard
    }
}