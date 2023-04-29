import { Flight } from "./Flight/Flight";
import { Aeroplan } from "./Aeroplan/Aeroplan";
import { FlightDate } from "./Flight/FlightDate";
import { Gate } from "./Gate/Gate";
import { Route } from "./Flight/Route/Route";

export class Airport {
    private name :string;
    private location:string;
    private flight:Flight[]=[]
    private aeroplan:Aeroplan[]=[]
    private flightDate:FlightDate;
    private gate:Gate[]=[];
    private route:Route[]=[];

    constructor(name:string,location:string,flightDate:FlightDate)
    {
        
        this.name= name;
        this.location = location;
        this.flightDate = flightDate
    }
    addFlight(flight:Flight){
        this.flight.push(flight)
    }
    addAeroplans(aeroplan:Aeroplan){
        this.aeroplan.push(aeroplan)
    }
    addGateForFlight(gate:Gate){
        return this.gate.push(gate)
    }
    addRoute(route:Route){
        this.route.push(route)
    }

}








    