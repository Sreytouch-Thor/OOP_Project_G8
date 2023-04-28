"use strict";
exports.__esModule = true;
exports.Airport = void 0;
var Airport = /** @class */ (function () {
    function Airport(name, location) {
        this.flight = [];
        this.aeroplan = [];
        this.name = name;
        this.logcation = location;
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
