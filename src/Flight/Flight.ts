import { BookingFlight } from "./Booking/BookingFlight"
import { DateTime } from "./Date/DateTime"
import { Passenger } from "./Passenger/Passenger"
import { Meals } from "./Meal/Meal"
import { Layout } from "../Aeroplan/Seat/LayoutSeat"

export class Flight{
    private flightNumber:string
    private date:DateTime
    private departureFrom:string
    private arriveTO:String
    private passenger:Passenger[]=[]
    private bookingFlight:BookingFlight[]=[]
    private layout:Layout[]=[]
    protected meal:Meals
    constructor(flightNumber:string,date:DateTime,depaartureFrom:string,arriveTO:string)
    {
        this.flightNumber = flightNumber
        this.date = date
        this.departureFrom = depaartureFrom
        this.arriveTO = arriveTO   
    }
    getPassenger(passenger:Passenger){
        this.passenger.push(passenger)
    }
    getBookingFlight(bookingFlight:BookingFlight){
        this.bookingFlight.push(bookingFlight)
    }
    getLayout(layouts:Layout){
        this.layout.push(layouts)
    }
    getMealType(meal:Meals){
        this.meal = meal
    }
    
   
}