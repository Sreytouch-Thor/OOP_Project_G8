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
import { Gate } from "./Gate/Gate";
import { Attendant } from "./Employee/Attendant";


let date = new DateTime ("Monday","09",2023,"3");


let flight:Flight = new Flight(
    "BA123",
    date,
    "London",
    "New York",
    [
      new Passenger("Sreytouch","female", "Vegetarian"),
      new Passenger("linna","female", "Vegan"),
      new Passenger("Pheap","female", "DairyFree"),
      new Passenger("Navy","female", "Halal"),
      new Passenger("Soki","female", "Kosher")
    ]
);


let bookingflight = new BookingFlight()
bookingflight.getFlight(flight)

let bookingTrips = new BookingTrip("china","ff12",date,bookingflight)
bookingTrips.getBookingFlight(bookingflight)


let booking = new Booking ()
booking.getBookingTrip(bookingTrips)

let passengers = new Passenger ("linna","female","Vegetarian")
passengers.getBooking(booking)

flight.getPassenger(passengers)
flight.getBookingFlight(bookingflight)


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

let attendants = new Attendant("sreytouch","female",1000)
let pilot = new Pilot ("lita","male",1000)
attendants.setSalary(7000)
pilot.setSalary(1000)
console.log(pilot.getPilotSalary());
console.log(attendants.getAttendantsSalary())
console.log(attendants)


let gate = new Gate ("yy-12")
flight.getGate(gate)

// console.log(seat);

// Example usage:
  
// let  meals: Meals[] = [
//     new Meals("Vegetarian", 2),
//     new Meals("Kosher", 2),
//     new Meals("Halal", 1),
//     new Meals("Vegan", 1)
// ];

// let mealCounts = flight.getMealCounts(flight,meals);
// console.log(mealCounts)
  
// let mealCounts = getMealCounts(flight, meals);
  
//   Print the meal counts
// for (const meal in mealCounts) {
//     console.log(meal);
// }


// flight.getSalaryManager();
// console.log(flight)
// console.log("Salary Manager is "+ flight.attendants + flight.);