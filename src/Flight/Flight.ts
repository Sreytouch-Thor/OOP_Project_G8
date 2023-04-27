import { BookingFlight } from "./Booking/BookingFlight"
import { DateTime } from "./Date/DateTime"
export class Flight{
    private flightNumber:string
    private date:DateTime
    private departureFrom:string
    private arriveTO:String
    // private bookingFlight:BookingFlight[]=[]
    constructor(flightNumber:string,date:DateTime,depaartureFrom:string,arriveTO:string)
    {
        this.flightNumber = flightNumber
        this.date = date
        this.departureFrom = depaartureFrom
        this.arriveTO = arriveTO
    }
   
}