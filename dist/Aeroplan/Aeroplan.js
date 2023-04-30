"use strict";
exports.__esModule = true;
exports.Aeroplan = void 0;
var Aeroplan = /** @class */ (function () {
    function Aeroplan(resgistrationNumber, seat, flight) {
        this.bag = [];
        this.resgistraionNumber = resgistrationNumber;
        this.seat = seat;
        this.flight = flight;
    }
    Aeroplan.prototype.getBag = function (bag) {
        this.bag.push(bag);
    };
    return Aeroplan;
}());
exports.Aeroplan = Aeroplan;
