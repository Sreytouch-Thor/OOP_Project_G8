export class Flight{
    private flightNumber:string
    private date:string
    private departureFrom:string
    private arriveTO:String
    constructor(flightNumber:string,date:string,depaartureFrom:string,arriveTO:string)
    {
        this.flightNumber = flightNumber
        this.date = date
        this.departureFrom = depaartureFrom
        this.arriveTO = arriveTO
    }
}