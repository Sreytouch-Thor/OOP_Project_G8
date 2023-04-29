import { FlightDate } from "../Flight/FlightDate";
import { Pilot } from "../Employee/Pilot";
import { Flight } from "../Flight/Flight";
import { DateTime } from "../Flight/Date/DateTime";
import { Employee } from "../Employee/Employee";

export class Airline {
    private name: string;
    private flightDate: FlightDate;
    private pilots: Pilot[]=[];
    private employees:Employee[]=[]
    constructor(name: string, flightDate: FlightDate){
        this.name = name;
        this.flightDate = flightDate;
        this.employees = [];

    }
    public getFlightsForDate(date: DateTime): Flight[] {
        return this.flightDate.getFlightsOnDate(date);
    }
    public getPilotFlightsForDate(pilot: Pilot, date:DateTime): Flight[] {
        let flightsOnDate:Flight[] = this.getFlightsForDate(date);
        let pilotFlights:Flight[]  = [];

        for (let flight of flightsOnDate) {
            if (pilot.canJoinFlight(flight)) {
                pilotFlights.push(flight);
            }
        }
        return pilotFlights;
    }
    public addPilot(pilot:Pilot){
        this.pilots.push(pilot)
    }
    public getEmployee(employee:Employee){
        this.employees.push(employee)
    }

    public getTotalSalary():number{
        let totalSalary:number = 0;
        for(let employee of this.employees){
            totalSalary += employee.getSalary()
        }
        return totalSalary;
    }
}