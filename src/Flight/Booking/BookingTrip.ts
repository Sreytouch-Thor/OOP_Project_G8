import { DateTime } from "../Date/DateTime"
import { Booking } from "./Booking"
export class BookingTrip {
    private name:string
    private booking:Booking;
    private flightNumber:string
    private date:DateTime
    constructor(
        name:string,flight:string,date:DateTime,
    )
    {

    }
}