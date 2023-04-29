import { Employee } from "./Employee";
import { Flight } from "../Flight/Flight";
import { DateTime } from "../Flight/Date/DateTime";

export class Attendant extends Employee {
    private flight :Flight;
    private date : DateTime;
    constructor(
        name: string,
        gender: string,
        salary: number
    )
    {
        super(name,gender,salary);
    };
}