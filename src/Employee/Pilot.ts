import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";
import { DateTime } from "../Flight/Date/DateTime";

 export class Pilot extends Employee {
    public name: string;
    private availableDates: DateTime;

    constructor(name: string, availableDates: DateTime,salary:number) {
        super(name,salary)
        this.name = name;
        this.availableDates = availableDates;
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