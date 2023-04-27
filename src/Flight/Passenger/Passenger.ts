import { FrequentFlyer } from "./FrequentFlyer";


export class Passenger {
    private name: string;
    private gender:string
    private frequentFlyer: FrequentFlyer;
    constructor(
        name: string, 
        gender:string
    ) 
    {
        this.name= name
        this.gender = gender
    }
}