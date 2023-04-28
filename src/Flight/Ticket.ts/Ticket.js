"use strict";
exports.__esModule = true;
exports.Ticket = void 0;
var Ticket = /** @class */ (function () {
    function Ticket(passenger, seat, flight) {
        this.passenger = passenger;
        this.seat = seat;
        this.flight = flight;
    }
    Ticket.prototype.getTicket = function (ticket) {
        return (this.passenger == ticket.passenger &&
            this.seat == ticket.seat &&
            this.flight == ticket.flight);
    };
    return Ticket;
}());
exports.Ticket = Ticket;
