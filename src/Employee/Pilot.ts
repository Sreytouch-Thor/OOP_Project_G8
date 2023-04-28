import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { DateTime } from "../Flight/Date/DateTime";


export class Pilot extends Employee {
    private time: number ;
    private date: DateTime ;
    private flight: Flight[]=[] ;
    constructor(
        date: DateTime,
        name: string,
        gender:string,
        salary:number
    )
    {
        super(name,gender,salary);
        this.date = date
    }
    getFlightPilot(flight:Flight){
        this.flight.push(flight)
    }
}