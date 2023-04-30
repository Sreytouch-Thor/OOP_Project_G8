"use strict";
exports.__esModule = true;
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(name, flightDate) {
        this.pilots = [];
        this.attendants = [];
        this.employees = [];
        this.name = name;
        this.flightDate = flightDate;
        this.employees = [];
    }
    Airline.prototype.addPilot = function (pilot) {
        this.pilots.push(pilot);
    };
    Airline.prototype.addAttendent = function (attendent) {
        this.attendants.push(attendent);
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
