
import { Seat } from "./Seat/Seat"
import { Flight } from "../Flight/Flight"
import { Baggage } from "../Flight/Baggage/Baggage"
import { Layout } from "./Seat/LayoutSeat"
export class Aeroplan {
    private resgistraionNumber:string
    private seat:Seat
    private flight:Flight
    private bag:Baggage[]=[]
    constructor(
        resgistrationNumber:string,seat:Seat,flight:Flight
    )
    {
        this.resgistraionNumber = resgistrationNumber
        this.seat = seat
        this.flight = flight
    }
    getBag(bag:Baggage){
        this.bag.push(bag)
    }
}