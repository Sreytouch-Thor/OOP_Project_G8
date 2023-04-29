import { FlightDate } from "../Flight/FlightDate";
import { Pilot } from "../Employee/Pilot";
import { Flight } from "../Flight/Flight";
import { DateTime } from "../Flight/Date/DateTime";
import { Employee } from "../Employee/Employee";
import { Attendant } from "../Employee/Attendant";

export class Airline {
    private name: string;
    private flightDate: FlightDate;
    private pilots: Pilot[]=[];
    private attendants: Attendant[]=[];
    private employees:Employee[]=[]
    constructor(name: string, flightDate: FlightDate){
        this.name = name;
        this.flightDate = flightDate;
        this.employees = [];

    }
  
    public addPilot(pilot:Pilot){
        this.pilots.push(pilot)
    }
    public addAttendent(attendent:Attendant){
        this.attendants.push(attendent)
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