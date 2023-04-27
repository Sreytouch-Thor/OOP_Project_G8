import { Passenger } from "./Passenger";

export class FrequentFlyer {
    private membershipNumber: number;
    private passenger: Passenger;
    constructor(
        membershipNumber: number,passenger: Passenger
    )
    {
        this.membershipNumber = membershipNumber
        this.passenger = passenger
    }
}