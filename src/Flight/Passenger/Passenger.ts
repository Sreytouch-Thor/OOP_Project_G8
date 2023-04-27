import { Booking } from "../Booking/Booking";


export class Passenger {
    private name: string;
    private gender:string
    private trip: Booking;
    constructor(
        name: string, 
        gender:string
    ) 
    {
        this.name= name
        this.gender = gender
    }
}