import { Employee } from "./Employee";
import { Flight } from "../Flight/Flight";
import { DateTime } from "../Flight/Date/DateTime";

export class Attendant extends Employee {
    private flight :Flight;
    private availableDates: DateTime;
    constructor(
        name: string,
        availableDates: DateTime,
        salary: number
    )
    {
        super(name,salary);
        this.availableDates = availableDates;
    };
    
    getSalary():number{
        return this.salary;
    }
    canJoinFlight(flight: Flight): boolean {
        for (let date of this.availableDates as unknown as DateTime[]) {
            if (date === flight.getDepartureDate()) {
                return true;
            }
        }
        return false;
    }
}