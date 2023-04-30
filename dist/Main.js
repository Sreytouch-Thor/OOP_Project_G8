"use strict";
exports.__esModule = true;
var Flight_1 = require("./Flight/Flight");
var DateTime_1 = require("./Flight/Date/DateTime");
var Pilot_1 = require("./Employee/Pilot");
var Attendant_1 = require("./Employee/Attendant");
var FlightDate_1 = require("./Flight/FlightDate");
var Airline_1 = require("./Airline/Airline");
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
var Date1 = new DateTime_1.DateTime(12, 12, 2023, 12);
var arriveDate1 = new DateTime_1.DateTime(14, 12, 2023, 12);
var Date2 = new DateTime_1.DateTime(23, 12, 2023, 10);
var arriveDate2 = new DateTime_1.DateTime(14, 12, 2023, 7);
var flight1 = new Flight_1.Flight("ABC123", Date1, arriveDate1);
var flight2 = new Flight_1.Flight("DEF456", Date2, arriveDate2);
var flights = [flight1, flight2];
var pilot1 = new Pilot_1.Pilot("nita", Date1, 1000);
var pilot2 = new Pilot_1.Pilot("jita", Date1, 1000);
var attendent1 = new Attendant_1.Attendant("sreytouch", Date1, 1000);
var attendent2 = new Attendant_1.Attendant("linna", Date1, 1000);
// console.log(pilot1);
var flightDate = new FlightDate_1.FlightDate(flight1);
var airline = new Airline_1.Airline("phnom penh Airline", flightDate);
airline.addPilot(pilot1);
airline.addPilot(pilot2);
airline.addAttendent(attendent1);
airline.addAttendent(attendent2);
var totalSalary = airline.getTotalSalary();
// console.log(airline);
console.log(flight1.getSalaryPilot());
// console.log(airline);
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
