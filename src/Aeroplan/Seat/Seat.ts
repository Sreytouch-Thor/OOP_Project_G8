import { SeatType } from "./SeatType"
export class Seat {
    private name:string
    private price:number
    private seatType:SeatType
    constructor(
        name:string,price:number
    )
    {
        this.name = name
        this.price = price
    }
    getSeatType(seatTypes:SeatType){
        this.seatType = seatTypes
    }
}