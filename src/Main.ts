import { Flight } from "./Flight/Flight";
import { DateTime } from "./Flight/Date/DateTime";
import { BookingFlight } from "./Flight/Booking/BookingFlight";
import { Booking } from "./Flight/Booking/Booking";
import { BookingTrip } from "./Flight/Booking/BookingTrip";
import { Passenger } from "./Flight/Passenger/Passenger";
import { Airport } from "./Airport";
import { Aeroplan } from "./Aeroplan/Aeroplan";
import { Layout } from "./Aeroplan/Seat/LayoutSeat";
import { Seat } from "./Aeroplan/Seat/Seat";
import { SeatType } from "./Aeroplan/Seat/SeatType";
import { Baggage } from "./Flight/Baggage/Baggage";
import { Pilot } from "./Employee/Pilot";
import { Meals } from "./Flight/Meal/Meal";

let date = new DateTime (12,12,2022,3)


let flight = new Flight ("AA12",date,"phnom penh","thlai")
flight.getMealType(Meals.DairyFree)


let bookingflight = new BookingFlight()
bookingflight.getFlight(flight)

let bookingTrips = new BookingTrip("china","ff12",date,bookingflight)
bookingTrips.getBookingFlight(bookingflight)
console.log(bookingTrips)

let booking = new Booking ()
booking.getBookingTrip(bookingTrips)

let passengers = new Passenger ("linna","female")
passengers.getBooking(booking)

flight.getPassenger(passengers)
flight.getBookingFlight(bookingflight)



// let aeroplans = new Aeroplan("112w",flight)

let airPort = new Airport ("aa-12","phom penh")
airPort.getFlight(flight)


let layout = new Layout ("6","3")

let seat = new Seat ("lita",121)

let seatType = new SeatType("business")
layout.getSeat(seat)
seat.getSeatType(seatType)
flight.getLayout(layout)

let aeroplan = new Aeroplan("ff-23",seat,flight)
airPort.getAeroplans(aeroplan)

let bag = new Baggage(1,22,33)
aeroplan.getBag(bag)

let pilot = new Pilot (date,"lita","male",2333)
pilot.getFlightPilot(flight)



console.log(pilot);

