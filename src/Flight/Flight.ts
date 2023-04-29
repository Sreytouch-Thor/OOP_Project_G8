import { BookingFlight } from "./Booking/BookingFlight"
import { DateTime } from "./Date/DateTime"
import { Passenger } from "./Passenger/Passenger"
import { Meals } from "./Meal/Meal"
import { Layout } from "../Aeroplan/Seat/LayoutSeat"
import { Gate } from "../Gate/Gate"
import { Pilot } from "../Employee/Pilot"
import { Attendant } from "../Employee/Attendant"

export class Flight{
    private flightNumber:string
    private date:DateTime
    private departureFrom:string
    private arriveTO:String
    private passengerList:Passenger[];
    private bookingFlight:BookingFlight[]=[]
    private meals:Meals[]=[];
    private layout:Layout[]=[]
    private gate:Gate
    public pilots: Pilot[]=[];
    public attendants:Attendant[]=[];
    constructor(flightNumber:string,date:DateTime,depaartureFrom:string,arriveTO:string,passengerList:Passenger[])
    {
        this.flightNumber = flightNumber
        this.date = date
        this.departureFrom = depaartureFrom
        this.arriveTO = arriveTO 
        this.passengerList = passengerList;  
    }
    getPassenger(passenger:Passenger){
        this.passengerList.push(passenger)
    }
    getBookingFlight(bookingFlight:BookingFlight){
         this.bookingFlight.push(bookingFlight)
    }
    getLayout(layouts:Layout){
        return this.layout.push(layouts)
    }
    getGate(gate:Gate){
        return this.gate = gate
    }

    getPilotSalary(pilots:Pilot):void{
        let SalaryOfPilot:number = 0;
        for(let pilot of this.pilots){
            let SalaryOfPilot = (pilot['salary']);
            return SalaryOfPilot;
        }
    }
    getSalaryFilghtAttendant(){
        for(let listFilghtAttendant of this.attendants) {
            let salarylistFilghtAttendant = (listFilghtAttendant["salary"]);
            return salarylistFilghtAttendant;
        }
    }
    getSalaryManager(){
        return  this.getSalaryPilot();
    }


    getMealCounts(flight: Flight, meals: Meals[]): Record<string, number> {
        const mealCounts: Record<string, number> = {};
        for (const meal of meals) {
          mealCounts[meal.name] = 0;
        }
        for (const passenger of flight.passengerList) {
          mealCounts[passenger.mealPreference]++;
        }
        return mealCounts;
      }
      
};
let flight = new Flight(
    "BA123",new DateTime('Monday',"02",2023,"2"),
    "London",
    "New York",
    [
      new Passenger("Sreytouch","female", "Vegetarian"),
      new Passenger("linna","female", "Vegan"),
      new Passenger("Pheap","female", "DairyFree"),
      new Passenger("Navy","female", "Halal"),
      new Passenger("Soki","female", "Kosher")
    ]
);

// let mealCount = getMealCounts(flight,Meals)





   
   
