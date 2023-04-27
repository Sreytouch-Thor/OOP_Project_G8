import { BookingTrip } from "./BookingTrip";
export class Booking {
    private bookingTrip: BookingTrip[]=[]
    getBookingTrip(bookingTrip:BookingTrip)
    {
        this.bookingTrip.push(bookingTrip)
    }
}