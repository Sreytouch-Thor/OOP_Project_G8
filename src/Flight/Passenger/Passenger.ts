import { Booking } from "../Booking/Booking";
import { Meals } from "../Meal/Meal";
export class Passenger {
    private name: string;
    private gender:string
    public mealPreference:string;
    private booking:Booking[]=[]
    private meal:Meals[]= [];
    constructor(
        name: string, 
        mealPreference:string
       
    ) 
    {
        this.name= name
        this.mealPreference = mealPreference
    }
    getBooking(booking:Booking){
        this.booking.push(booking)
    }
    getMeals(meals:Meals){
        this.meal.push(meals);
    }
    
}