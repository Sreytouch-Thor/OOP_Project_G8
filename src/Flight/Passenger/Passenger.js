"use strict";
exports.__esModule = true;
exports.Passenger = void 0;
var Passenger = /** @class */ (function () {
    function Passenger(name, gender) {
        this.booking = [];
        this.name = name;
        this.gender = gender;
    }
    Passenger.prototype.getBooking = function (booking) {
        this.booking.push(booking);
    };
    Passenger.prototype.countPassenger = function (passenger) {
    };
    return Passenger;
}());
exports.Passenger = Passenger;
