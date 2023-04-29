"use strict";
exports.__esModule = true;
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(name, flightDate) {
        this.pilots = [];
        this.employees = [];
        this.name = name;
        this.flightDate = flightDate;
        this.employees = [];
    }
    Airline.prototype.getFlightsForDate = function (date) {
        return this.flightDate.getFlightsOnDate(date);
    };
    Airline.prototype.getPilotFlightsForDate = function (pilot, date) {
        var flightsOnDate = this.getFlightsForDate(date);
        var pilotFlights = [];
        for (var _i = 0, flightsOnDate_1 = flightsOnDate; _i < flightsOnDate_1.length; _i++) {
            var flight = flightsOnDate_1[_i];
            if (pilot.canJoinFlight(flight)) {
                pilotFlights.push(flight);
            }
        }
        return pilotFlights;
    };
    Airline.prototype.addPilot = function (pilot) {
        this.pilots.push(pilot);
    };
    Airline.prototype.getEmployee = function (employee) {
        this.employees.push(employee);
    };
    Airline.prototype.getTotalSalary = function () {
        var totalSalary = 0;
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    };
    return Airline;
}());
exports.Airline = Airline;
