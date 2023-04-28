"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flightNumber, date, depaartureFrom, arriveTO) {
        this.passenger = [];
        this.bookingFlight = [];
        this.layout = [];
        this.flightNumber = flightNumber;
        this.date = date;
        this.departureFrom = depaartureFrom;
        this.arriveTO = arriveTO;
    }
    Flight.prototype.getPassenger = function (passenger) {
        this.passenger.push(passenger);
    };
    Flight.prototype.getBookingFlight = function (bookingFlight) {
        this.bookingFlight.push(bookingFlight);
    };
    Flight.prototype.getLayout = function (layouts) {
        this.layout.push(layouts);
    };
    return Flight;
}());
exports.Flight = Flight;
