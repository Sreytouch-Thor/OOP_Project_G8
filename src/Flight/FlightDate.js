"use strict";
exports.__esModule = true;
exports.FlightDate = void 0;
var FlightDate = /** @class */ (function () {
    function FlightDate(flight) {
        this.flights = [];
        this.flights.push(flight);
    }
    FlightDate.prototype.getflight = function (flight) {
        this.flights.push(flight);
    };
    FlightDate.prototype.getFlightsOnDate = function (date) {
        var flightsOnDate = [];
        for (var _i = 0, _a = this.flights; _i < _a.length; _i++) {
            var flight = _a[_i];
            if (flight.getDepartureDate().isEqual(date)) {
                flightsOnDate.push(flight);
            }
        }
        return flightsOnDate;
    };
    return FlightDate;
}());
exports.FlightDate = FlightDate;
