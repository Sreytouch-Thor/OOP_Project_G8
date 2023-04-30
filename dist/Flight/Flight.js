"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flightNumber, departureDate, arriveDate) {
        this.passenger = [];
        this.bookingFlight = [];
        this.meals = [];
        this.layout = [];
        this.pilots = [];
        this.attendants = [];
        this.flightNumber = flightNumber;
        this.departureDate = departureDate;
        this.arriveDate = arriveDate;
    }
    // getPassenger(passenger:Passenger){
    //     this.passenger.push(passenger)
    // }
    // getBookingFlight(bookingFlight:BookingFlight){
    //     this.bookingFlight.push(bookingFlight)
    // }
    // getLayout(layouts:Layout){
    //     this.layout.push(layouts)
    // }
    // getMealType(meal:Meals){
    //     this.meal = meal
    // }
    Flight.prototype.getSalaryPilot = function () {
        for (var _i = 0, _a = this.pilots; _i < _a.length; _i++) {
            var pilot = _a[_i];
            var salaryPilot = (pilot["salary"]);
            return salaryPilot;
        }
    };
    // getSalaryAttendant():number{
    //     for(let listAttendant of this.attendants) {
    //         let salarylistAttendant = (listAttendant["salary"]);
    //         return salarylistAttendant;
    //     }
    // }
    // getSalaryManager():number|undefined{
    //     return  this.getSalaryPilot() + this.getSalaryAttendant();
    // }
    Flight.prototype.getDepartureDate = function () {
        return this.departureDate;
    };
    Flight.prototype.getGate = function () {
        return this.gate;
    };
    return Flight;
}());
exports.Flight = Flight;
