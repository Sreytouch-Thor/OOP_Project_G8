"use strict";
exports.__esModule = true;
exports.BookingTrip = void 0;
var BookingTrip = /** @class */ (function () {
    function BookingTrip(name, flightNumber, date, bookingflight) {
        this.bookingflight = [];
        this.name = name;
        this.flightNumber = this.flightNumber;
    }
    BookingTrip.prototype.getBookingFlight = function (bookingflight) {
        this.bookingflight.push(bookingflight);
    };
    return BookingTrip;
}());
exports.BookingTrip = BookingTrip;
