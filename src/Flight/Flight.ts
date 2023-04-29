import { BookingFlight } from "./Booking/BookingFlight"
import { DateTime } from "./Date/DateTime"
import { Passenger } from "./Passenger/Passenger"
import { Meals } from "./Meal/Meal"
import { Layout } from "../Aeroplan/Seat/LayoutSeat"
import { Gate } from "../Gate/Gate"

export class Flight{
    private flightNumber:string
    private departureDate:DateTime
    private arriveDate:DateTime
    private date:DateTime
    private passenger:Passenger[]=[]
    private bookingFlight:BookingFlight[]=[]
    private layout:Layout[]=[]
    protected meal:Meals
    private gate:Gate
    constructor(flightNumber:string,departureDate:DateTime,arriveDate:DateTime)
    {
        this.flightNumber = flightNumber
        this.departureDate = departureDate
        this.arriveDate = arriveDate
        
    }
    // getPassenger(passenger:Passenger){
    //     this.passenger.push(passenger)
    // }
    // getBookingFlight(bookingFlight:BookingFlight){
    //     this.bookingFlight.push(bookingFlight)
    // }
    // getLayout(layouts:Layout){
    //     this.layout.push(layouts)
    // }
    // getMealType(meal:Meals){
    //     this.meal = meal
    // }
    
    
    public  getDepartureDate():DateTime {
        return this.departureDate;
    }
    getGate(){
        return this.gate;
    }

    
   
}


