import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { DateTime } from "../Flight/Date/DateTime";


export class Pilot extends Employee {
    private time: number ;
    private date: DateTime ;
    private flight: Flight[]=[] ;
    constructor(
        time: string,
        date: string,
        name: string
    )
    {
        super(name);
        this.time = time;
        this.date = date;
    };
}