
import { Seat } from "./Seat/Seat"
import { Flight } from "../Flight/Flight"
export class Aeroplan {
    private resgistraionNumber:string
    private seat:Seat
    private flight:Flight
    constructor (resgistrationNumber:string,seat:Seat,flight:Flight){
        this.resgistraionNumber = resgistrationNumber
        this.seat = seat
        this.flight = flight
    }
}