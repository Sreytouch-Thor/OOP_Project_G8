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




import { FlightDate } from "./Flight/FlightDate";
import { Airline } from "./Airline/Airline";
import { Employee } from "./Employee/Employee";


// let date = new DateTime (12,12,2022,3)


// let flight = new Flight ("AA12",date,"phnom penh","thlai")
// flight.getMealType(Meals.DairyFree)


// let bookingflight = new BookingFlight()
// bookingflight.getFlight(flight)

// let bookingTrips = new BookingTrip("china","ff12",date,bookingflight)
// bookingTrips.getBookingFlight(bookingflight)


// let booking = new Booking ()
// booking.getBookingTrip(bookingTrips)

// let passengers = new Passenger ("linna","Vegetarian")
// passengers.getBooking(booking)
// let passengers = new Passenger ("linna","female")
// passengers.getBooking(booking)

// flight.getPassenger(passengers)
// flight.getBookingFlight(bookingflight)


// let airPort = new Airport ("aa-12","phom penh")
// airPort.getFlight(flight)


// let layout = new Layout ("6","3")

// let seat = new Seat ("lita",121)

// let seatType = new SeatType("business")
// layout.getSeat(seat)
// seat.getSeatType(seatType)
// flight.getLayout(layout)

// let aeroplan = new Aeroplan("ff-23",seat,flight)
// airPort.getAeroplans(aeroplan)

// let bag = new Baggage(1,22,33)
// aeroplan.getBag(bag)

// let pilot = new Pilot (date,"lita","male")
// pilot.getFlightPilot(flight)
// // pilot.setSalary(1000)

// let gate = new Gate ("yy-12")
// flight.getGate(gate)

// console.log(airPort);

let Date1 = new DateTime (12,12,2023,12)
let arriveDate1 = new DateTime (14,12,2023,12)

let Date2 = new DateTime (23,12,2023,10)
let arriveDate2 = new DateTime (14,12,2023,7)

let flight1 = new Flight("ABC123", Date1, arriveDate1);
let flight2 = new Flight("DEF456", Date2, arriveDate2);

let flights = [flight1, flight2];
let pilot1 = new Pilot("nita",Date1,1000);
let pilot2 = new Pilot("jita",Date1,1000);
// console.log(pilot1.canJoinFlight(flight1));


let flightDate = new FlightDate(flight1)

let airline = new Airline("phnom penh Airline",flightDate);
airline.addPilot(pilot1);
airline.addPilot(pilot2);

let totalSalary = airline.getTotalSalary();
console.log(airline);

// console.log(airline);

let attendants = new Attendant("sreytouch",1000)
let pilot = new Pilot ("lita",arriveDate1,1000)
attendants.setSalary(7000)
pilot.setSalary(1000)
console.log(pilot.getPilotSalary());
console.log(attendants.getAttendantsSalary())
console.log(attendants)



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