import { Passenger } from "../Passenger/Passenger"
import { Seat } from "../../Aeroplan/Seat/Seat"
import { Flight } from "../Flight"
export class Ticket {
    private passenger:Passenger
    private seat:Seat
    private flight:Flight
    constructor (passenger:Passenger,seat:Seat,flight:Flight){
        this.passenger=passenger
        this.seat = seat
        this.flight = flight
    }
    getTicket(ticket:Ticket){
        return (
            this.passenger == ticket.passenger &&
            this.seat == ticket.seat&&
            this.flight==ticket.flight
        )
    }
}