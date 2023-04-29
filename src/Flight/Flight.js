"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flightNumber, departureDate, arriveDate) {
        this.passenger = [];
        this.bookingFlight = [];
        this.layout = [];
        this.flightNumber = flightNumber;
        this.departureDate = departureDate;
        this.arriveDate = arriveDate;
    }
    // getPassenger(passenger:Passenger){
    //     this.passenger.push(passenger)
    // }
    // getBookingFlight(bookingFlight:BookingFlight){
    //     this.bookingFlight.push(bookingFlight)
    // }
    // getLayout(layouts:Layout){
    //     this.layout.push(layouts)
    // }
    // getMealType(meal:Meals){
    //     this.meal = meal
    // }
    Flight.prototype.getDepartureDate = function () {
        return this.departureDate;
    };
    Flight.prototype.getGate = function (gate) {
        return this.gate = gate;
    };
    return Flight;
}());
exports.Flight = Flight;
