import { Flight } from "./Flight/Flight";
import { DateTime } from "./Flight/Date/DateTime";
import { BookingFlight } from "./Flight/Booking/BookingFlight";
import { Booking } from "./Flight/Booking/Booking";
import { BookingTrip } from "./Flight/Booking/BookingTrip";
import { Passenger } from "./Flight/Passenger/Passenger";
import { Airport } from "./Airport";

let date = new DateTime (12,12,2022,3)
let flight = new Flight ("AA12",date,"phnom penh","thland")

let bookingflight = new BookingFlight()
bookingflight.getFlight(flight)

let bookingTrips = new BookingTrip("china","ff12",date,bookingflight)
bookingTrips.getBookingFlight(bookingflight)

let booking = new Booking ()
booking.getBookingTrip(bookingTrips)

let passenger = new Passenger ("linna","female",booking)

let airPort = new Airport ("aaa","phom penh",flight)
airPort.getFlight(flight)
console.log(passenger);
