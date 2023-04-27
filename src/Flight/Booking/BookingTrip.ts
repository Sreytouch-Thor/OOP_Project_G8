import { DateTime } from "../Date/DateTime"
import { BookingFlight } from "./BookingFlight";
export class BookingTrip {
    private name:string
    private flightNumber:string
    private date:DateTime
    private bookingflight:BookingFlight[]=[];
    constructor(
        name:string,flightNumber:string,date:DateTime,bookingflight:BookingFlight
    )
    {
        this.name = name
        this.flightNumber = this.flightNumber
    }
    getBookingFlight(bookingflight:BookingFlight){
        this.bookingflight.push(bookingflight)
    }
    
}