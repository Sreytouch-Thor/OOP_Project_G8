
import { Pilot } from "./Pilot";
export abstract class Employee {
    protected name: string;
    protected gender:string
    protected salary: number = 0;
    constructor( 
        name: string,
        salary: number
        
    )
    {
        this.name = name
       
        this.salary = salary;
        
    };
    getSalary(): number{
        return this.salary;
    }

}