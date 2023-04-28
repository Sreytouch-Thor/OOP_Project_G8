import { Seat } from "./Seat"
export class Layout{
    private row:string
    private coloumn:string
    private seat:Seat[]=[]
    constructor(
        row:string,column:string
    )
    {
        this.row = row
        this.coloumn = column
    }
    getSeat(seat:Seat){
        this.seat.push(seat)
    }
}