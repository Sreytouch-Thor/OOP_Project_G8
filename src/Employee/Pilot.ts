import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { DateTime } from "../Flight/Date/DateTime";


 export class Pilot extends Employee {
    private availableDates: DateTime;
    protected salary: number;
    private flights:Flight[]=[]
    constructor(name: string, availableDates: DateTime,salary:number) {
        
        super(name,salary);
        this.availableDates = availableDates;
        this.salary = salary;
    }
    // getSalary():number {
    //     return this.salary;
    // }

    canJoinFlight(flights: Flight):boolean{
        let availableDates = []
        for (let date of this.availableDates as unknown as DateTime[]) {
            if (date === flights['departureDate']) {
                availableDates.push(flights)    
                return true; 
            }
        }
        return false;
    }
    

    

}

