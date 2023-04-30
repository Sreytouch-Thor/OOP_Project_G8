"use strict";
exports.__esModule = true;
exports.Airport = void 0;
var Airport = /** @class */ (function () {
    function Airport(name, location, flightDate) {
        this.flight = [];
        this.aeroplan = [];
        this.name = name;
        this.location = location;
        this.flightDate = flightDate;
    }
    Airport.prototype.getFlight = function (flight) {
        this.flight.push(flight);
    };
    Airport.prototype.getAeroplans = function (aeroplan) {
        this.aeroplan.push(aeroplan);
    };
    return Airport;
}());
exports.Airport = Airport;
