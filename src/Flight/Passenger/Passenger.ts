import { Booking } from "../Booking/Booking";
import { Meals } from "../Meal/Meal";
import { Gate } from "../../Gate/Gate";
import { Flight } from "../Flight";
export class Passenger {
    private name: string;
    private gender:string
    private flight:Flight
    public mealPreference:string;
    private booking:Booking[]=[]
    private meals:Meals[]= [];
    constructor(
        name: string, 
        mealPreference:string
       
    ) 
    {
        this.name= name
        this.mealPreference = mealPreference
    }
    addMeal(meal:Meals){
        this.meals.push(meal)
    }
    getBooking(booking:Booking){
        this.booking.push(booking)
    }
    addGateForPassenger(fligfht:Flight){
        this.flight = fligfht
    }
};