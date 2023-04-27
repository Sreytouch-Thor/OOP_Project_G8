import { Employee } from "./Employee";
import { Flight } from "../Flight/Flight";


export class Attendant extends Employee {
    private flight :Flight;
    private time : string;
    private date : string;
    constructor(
        name : string,
        time : string,
        date : string
    ){
        super(name);
        this.time = time;
        this.date = date;
    };
}