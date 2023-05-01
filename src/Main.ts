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

// seat
let seat = new Seat ("lita",121)

// seatType
let seatType = new SeatType("business")

// add layout of seat
layout.getSeat(seat)

// add seaat to seatType
seat.getSeatType(seatType)

// Datetime for flight
let Date1 = new DateTime (12,12,2023,12)
let arriveDate1 = new DateTime (14,12,2023,12)
let Date2 = new DateTime (23,12,2023,10)
let arriveDate2 = new DateTime (14,12,2023,7)

// As an airline pilot, I want to know, for a given date, how many flights I have to join
// flight 1 
let flight1 = new Flight("ABC123", Date1, arriveDate1);
flight1.addLayout(layout)

// gate  flight
let gate1 = new Gate("A11")

// get gate of flight1
flight1.getGateToFlight(gate1)

// flight 2
let flight2 = new Flight("DEF456", Date2, arriveDate2);

// get gate of flight2
let gate2 = new Gate("A13")
flight2.getGateToFlight(gate2)

// get all flight 
let flights = [flight1, flight2];
// console.log(flights);

// booking flight
let bookingflight = new BookingFlight();
bookingflight.getFlight(flight1)

// add bookingtrip to booking flight
let bookingTrips = new BookingTrip("china","ff12",Date1,bookingflight)
bookingTrips.getBookingFlight(bookingflight)

// add booking to bookingTrip
let booking = new Booking ()
booking.getBookingTrip(bookingTrips)


// detail passenger to booking 
let passengers = new Passenger ("linna")
passengers.getBooking(booking)
// console.log(passengers);

// add paassenger to flight
flight1.addPassenger(passengers)

// add booking of fllight
flight1.addBookingFlight(bookingflight)


// get  aeroplan to flight
let aeroplan = new Aeroplan("ff-23",seat,flight1)

// add bag to aeroplan
let bag = new Baggage(1,22,33)
aeroplan.getBag(bag)

// flight date of flight
let flightDates = new FlightDate(flight1)
let airport = new Airport("AA12","Phom penh",flightDates)

// add airoplan to airport
airport.addAeroplans(aeroplan)

// add flight to airport
airport.addFlight(flight1)

// add gate for flight to airport
airport.addGateForFlight(gate1)


// console.log(pilot1.canJoinFlight(flight1));

// get flight to empoyee
let pilot1 = new Pilot("nita",Date1,1000);
let pilot2 = new Pilot("jita",Date1,1000);
let attendent1 = new Attendant("sreytouch",Date1,1000);
let attendent2 = new Attendant("linna",Date1,1000);

flight1.addPilot(pilot1)
flight1.addPilot(pilot2)
flight1.addAttendant(attendent1)
flight1.addAttendant(attendent2)
// console.log("The salary all my employees : "+ flight1.getSalaryManager())


// add employee to airline
let flightDate = new FlightDate(flight1)
let airline = new Airline("phnom penh Airline",flightDate);
airline.addPilot(pilot1);
airline.addPilot(pilot2);
airline.addAttendent(attendent1);
airline.addAttendent(attendent2);
// let totalSalary = airline.getTotalSalary();


//get Meals to flight
let meal1 = new Meals("Vegetarian", 2);
let meal2 = new Meals("Kosher", 2);
let meal3 = new Meals("Halal", 1);
let meal4 =  new Meals("Vegan", 1);
passengers.addMeal(meal1)
passengers.addMeal(meal2)
passengers.addMeal(meal3)
flight1.getMeal()
console.log("The meals in Flight that should to prepar : " + flight1.getMeal())




