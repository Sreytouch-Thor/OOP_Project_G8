import { Booking } from "../Booking/Booking";
export class Passenger {
    private name: string;
    private gender:string
    private booking:Booking[]=[]
    constructor(
        name: string, 
        gender:string,
       
    ) 
    {
        this.name= name
        this.gender = gender
    }
    getBooking(booking:Booking){
        this.booking.push(booking)
    }
    countPassenger(passenger:Passenger){
        
    }
}