import { Flight } from "./Flight/Flight";

export class Airport {
    private name :string;
    private logcation:string;
    private flight:Flight[]=[]
    constructor(name:string,location:string,flight:Flight)
    {
        
        this.name= name;
        this.logcation = location;
    }
    getFlight(flight:Flight){
        this.flight.push(flight)
    }
    

}
