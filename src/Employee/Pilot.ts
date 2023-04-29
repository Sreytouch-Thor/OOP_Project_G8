import { Flight } from "../Flight/Flight";
import { Employee } from "./Employee";



export class Pilot extends Employee {
    private flight: Flight[]=[] ;
    constructor(
        name: string,
        gender: string,
        salary: number,
   

    )
    {
        super(name,gender,salary) ;
    };
    getPilotSalary():number{
        return this.salary;
    }
};