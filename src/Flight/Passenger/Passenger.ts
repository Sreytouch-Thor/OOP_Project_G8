import { Trip } from "../Trip/Trip";


export class Passenger {
    private name: string;
    private gender:string
    private trip: Trip;
    constructor(
        name: string, 
        gender:string
    ) 
    {
        this.name= name
        this.gender = gender
    }
}