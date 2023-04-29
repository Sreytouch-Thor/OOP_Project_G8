import { BookingFlight } from "./Booking/BookingFlight"
import { DateTime } from "./Date/DateTime"
import { Passenger } from "./Passenger/Passenger"
import { Meals } from "./Meal/Meal"
import { Layout } from "../Aeroplan/Seat/LayoutSeat"
import { Gate } from "../Gate/Gate"
import { Pilot } from "../Employee/Pilot"
import { Attendant } from "../Employee/Attendant"
import { Booking } from "./Booking/Booking"
export class Flight{
    private flightNumber:string
    private departureDate:DateTime
    private arriveDate:DateTime
    private date:DateTime
    private passenger:Passenger[]=[]
    private bookingFlight:BookingFlight[]=[]
    private meals:Meals[]=[];
    private layout:Layout[]=[]
    private gate:Gate;
    private pilots:Pilot[]=[];
    private attendants:Attendant[]=[];
    constructor(flightNumber:string,departureDate:DateTime,arriveDate:DateTime)
    {
        this.flightNumber = flightNumber
        this.departureDate = departureDate
        this.arriveDate = arriveDate
        
    }
    addPassenger(passenger:Passenger){
        this.passenger.push(passenger)
    }
    addBookingFlight(bookingFlight:BookingFlight){
        this.bookingFlight.push(bookingFlight)
    }
    addLayout(layouts:Layout){
        this.layout.push(layouts)
    }

    addPilot(pilot:Pilot){
        this.pilots.push(pilot)
    }
    addAttendant(attendant:Attendant){
        this.attendants.push(attendant)
    }
    //get all salary for Employee
    getSalaryPilot(){
        let salaryOfPilots:number =0;
        for(let pilot of this.pilots) {
            salaryOfPilots+= (pilot["salary"]);
        }
        return salaryOfPilots;
    }
    getSalaryAttendant(){
        let salarylistAttendant: number= 0;
        for(let listAttendant of this.attendants) {
            salarylistAttendant += (listAttendant["salary"]);
        }
        return salarylistAttendant;
    }
    getSalaryManager():number{
        return  this.getSalaryPilot() + this.getSalaryAttendant();
    }
    
    
    // get Meal types for passenger
    getMeal() {
        let  listMeal = [];
         for(let passenger of this.passenger){
           for(let meal of passenger["meals"]){
               listMeal.push(meal["name"]);
             };
             return listMeal;
         }
     }
     //get Passenger comeback

    //  getReturnOfPassenger(){
    //      let passengerReturn = 0;
    //      for(let listBooking of this.bookingFlight) {
    //          if(listBooking["typeOfBooking"] === TypeOfBooking.RETURN) {
    //              passengerReturn += 1
    //          } ;
    //      }
    //      return passengerReturn;
    // }
 
    public  getDepartureDate():DateTime {
        return this.departureDate;
    }
    addGate(gate:Gate){
        return this.gate;
    }

    
   
}


