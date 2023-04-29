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


// seat layout
let layout = new Layout ("6","3")
let seat = new Seat ("lita",121)
let seatType = new SeatType("business")
layout.getSeat(seat)
seat.getSeatType(seatType)

// Datetime
let Date1 = new DateTime (12,12,2023,12)
let arriveDate1 = new DateTime (14,12,2023,12)

let Date2 = new DateTime (23,12,2023,10)
let arriveDate2 = new DateTime (14,12,2023,7)

let flight1 = new Flight("ABC123", Date1, arriveDate1);
flight1.addLayout(layout)


// gate  flight
let gate1 = new Gate("A11")
flight1.addGate(gate1)



let bookingflight = new BookingFlight();

bookingflight.getFlight(flight1)
let bookingTrips = new BookingTrip("china","ff12",Date1,bookingflight)
bookingTrips.getBookingFlight(bookingflight)

let booking = new Booking ()
booking.getBookingTrip(bookingTrips)

// get passenger
let passengers = new Passenger ("linna","female")
passengers.getBooking(booking)
flight1.addPassenger(passengers)
flight1.addBookingFlight(bookingflight)

console.log(passengers);
flight1.addLayout(layout)
// get  aeroplan 
let aeroplan = new Aeroplan("ff-23",seat,flight1)
let bag = new Baggage(1,22,33)
aeroplan.getBag(bag)

let flightDates = new FlightDate(flight1)
let airport = new Airport("AA12","Phom penh",flightDates)
airport.addAeroplans(aeroplan)
airport.addFlight(flight1)
airport.addGateForFlight(gate1)





let flight2 = new Flight("DEF456", Date2, arriveDate2);
let gate2 = new Gate("A13")
flight2.addGate(gate2)

let flights = [flight1, flight2];

// find all salary in Employee 
let pilot1 = new Pilot("nita",Date1,1000);
let pilot2 = new Pilot("jita",Date1,1000);
let attendent1 = new Attendant("sreytouch",Date1,1000);
let attendent2 = new Attendant("linna",Date1,1000);

flight1.addPilot(pilot1)
flight1.addPilot(pilot2)
flight1.addAttendant(attendent1)
flight1.addAttendant(attendent2)



console.log("The salary all my employees : "+ flight1.getSalaryManager())


//
let flightDate = new FlightDate(flight1)

let airline = new Airline("phnom penh Airline",flightDate);
airline.addPilot(pilot1);
airline.addPilot(pilot2);

airline.addAttendent(attendent1);
airline.addAttendent(attendent2);

let totalSalary = airline.getTotalSalary();



//get Meals
let meal1 = new Meals("Vegetarian", 2);
let meal2 = new Meals("Kosher", 2);
let meal3 = new Meals("Halal", 1);
let meal4 =  new Meals("Vegan", 1);
passengers.addMeal(meal1)
passengers.addMeal(meal2)
passengers.addMeal(meal3)

flight1.getMeal()
console.log(flight1)



