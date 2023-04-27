import { Airport } from "../../Airport";


export class Baggage {
    private bageNumber: number;
    private size:number
    private weight:number
    constructor(
        bageNumber: number,
        size:number,
        weight:number
    )
    {
        this.bageNumber = bageNumber
        this.size = size
        this.weight = weight
    }
}