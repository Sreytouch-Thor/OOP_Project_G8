import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { DateTime } from "../Flight/Date/DateTime";


export class Pilot extends Employee {
    private date: DateTime ;
    private flight: Flight[]=[] ;
    constructor(
        name: string,
        gender: string,
        salary: number
    )
    {
        super(name,gender,salary) ;
    };
}