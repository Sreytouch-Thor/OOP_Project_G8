import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { DateTime } from "../Flight/Date/DateTime";


export class Pilot extends Employee {
    private time: number ;
    private date: DateTime ;
    private flight: Flight[]=[] ;
    constructor(
        time: number,
        date: DateTime,
        name: string,
        salary:number
    )
    {
        super(name,salary);
        this.time = time;
        this.date = date;
    };
    getFlights(flight:Flight){
        this.flight.push(flight)
    }
}