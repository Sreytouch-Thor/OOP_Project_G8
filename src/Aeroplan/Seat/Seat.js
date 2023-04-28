"use strict";
exports.__esModule = true;
exports.Seat = void 0;
var Seat = /** @class */ (function () {
    function Seat(name, price) {
        this.name = name;
        this.price = price;
    }
    Seat.prototype.getSeatType = function (seatTypes) {
        this.seatType = seatTypes;
    };
    return Seat;
}());
exports.Seat = Seat;
