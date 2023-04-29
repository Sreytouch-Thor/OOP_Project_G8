import { Booking } from "../Booking/Booking";
import { Meals } from "../Meal/Meal";
export class Passenger {
    private name: string;
    private gender:string
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
};