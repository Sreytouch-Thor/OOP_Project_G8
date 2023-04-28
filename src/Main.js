"use strict";
exports.__esModule = true;
var Flight_1 = require("./Flight/Flight");
var DateTime_1 = require("./Flight/Date/DateTime");
var BookingFlight_1 = require("./Flight/Booking/BookingFlight");
var Booking_1 = require("./Flight/Booking/Booking");
var BookingTrip_1 = require("./Flight/Booking/BookingTrip");
var Passenger_1 = require("./Flight/Passenger/Passenger");
var Airport_1 = require("./Airport");
var Aeroplan_1 = require("./Aeroplan/Aeroplan");
var LayoutSeat_1 = require("./Aeroplan/Seat/LayoutSeat");
var Seat_1 = require("./Aeroplan/Seat/Seat");
var SeatType_1 = require("./Aeroplan/Seat/SeatType");
var Baggage_1 = require("./Flight/Baggage/Baggage");
var Pilot_1 = require("./Employee/Pilot");
var Meal_1 = require("./Flight/Meal/Meal");
var date = new DateTime_1.DateTime(12, 12, 2022, 3);
var flight = new Flight_1.Flight("AA12", date, "phnom penh", "thland");
flight.getMealType(Meal_1.Meals.DairyFree);
var bookingflight = new BookingFlight_1.BookingFlight();
bookingflight.getFlight(flight);
var bookingTrips = new BookingTrip_1.BookingTrip("china", "ff12", date, bookingflight);
bookingTrips.getBookingFlight(bookingflight);
var booking = new Booking_1.Booking();
booking.getBookingTrip(bookingTrips);
var passengers = new Passenger_1.Passenger("linna", "female");
passengers.getBooking(booking);
flight.getPassenger(passengers);
flight.getBookingFlight(bookingflight);
// let aeroplans = new Aeroplan("112w",flight)
var airPort = new Airport_1.Airport("aa-12", "phom penh");
airPort.getFlight(flight);
var layout = new LayoutSeat_1.Layout("6", "3");
var seat = new Seat_1.Seat("lita", 121);
var seatType = new SeatType_1.SeatType("business");
layout.getSeat(seat);
seat.getSeatType(seatType);
flight.getLayout(layout);
var aeroplan = new Aeroplan_1.Aeroplan("ff-23", seat, flight);
airPort.getAeroplans(aeroplan);
var bag = new Baggage_1.Baggage(1, 22, 33);
aeroplan.getBag(bag);
var pilot = new Pilot_1.Pilot(3, date, "lita");
pilot.getFlights(flight);
console.log(flight);
