"use strict";
exports.__esModule = true;
exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking() {
        this.bookingTrip = [];
    }
    Booking.prototype.getBookingTrip = function (bookingTrip) {
        this.bookingTrip.push(bookingTrip);
        console.log("bookingTrip");
    };
    return Booking;
}());
exports.Booking = Booking;
