import { Employee } from "./Employee";
import { Flight } from "../Flight/Flight";

export class Attendant extends Employee {
    private flight :Flight;
    private time : string;
    private date : string;
    constructor(
        time: string,
        date: string,
        name: string,
        gender: string,
        salary: number
    )
    {
        super(name,gender,salary);
        this.time = time;
        this.date = date;
    };
}