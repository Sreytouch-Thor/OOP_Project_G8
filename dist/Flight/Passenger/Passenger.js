"use strict";
exports.__esModule = true;
exports.Passenger = void 0;
var Passenger = /** @class */ (function () {
    function Passenger(name, mealPreference) {
        this.booking = [];
        this.meal = [];
        this.name = name;
        this.mealPreference = mealPreference;
    }
    Passenger.prototype.getBooking = function (booking) {
        this.booking.push(booking);
    };
    Passenger.prototype.getMeals = function (meals) {
        this.meal.push(meals);
    };
    return Passenger;
}());
exports.Passenger = Passenger;
