import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";


export class Pilot extends Employee {
    private flight: Flight ;
    private time: string ;
    private date: string ;
    constructor(
        time: string,
        date: string,
        name: string
    ){
        super(name);
        this.time = time;
        this.date = date;
    };
}