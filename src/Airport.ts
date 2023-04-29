import { Flight } from "./Flight/Flight";
import { Aeroplan } from "./Aeroplan/Aeroplan";
import { FlightDate } from "./Flight/FlightDate";

export class Airport {
    private name :string;
    private location:string;
    private flight:Flight[]=[]
    private aeroplan:Aeroplan[]=[]
    private flightDate:FlightDate;
    constructor(name:string,location:string,flightDate:FlightDate)
    {
        
        this.name= name;
        this.location = location;
        this.flightDate = flightDate
    }
    getFlight(flight:Flight){
        this.flight.push(flight)
    }
    getAeroplans(aeroplan:Aeroplan){
        this.aeroplan.push(aeroplan)
    }
    

}








    