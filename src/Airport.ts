import { Flight } from "./Flight/Flight";
import { Aeroplan } from "./Aeroplan/Aeroplan";

export class Airport {
    private name :string;
    private logcation:string;
    private flight:Flight[]=[]
    private aeroplan:Aeroplan[]=[]
    constructor(name:string,location:string)
    {
        
        this.name= name;
        this.logcation = location;
    }
    getFlight(flight:Flight){
        this.flight.push(flight)
    }
    getAeroplans(aeroplan:Aeroplan){
        this.aeroplan.push(aeroplan)
    }
    

}
