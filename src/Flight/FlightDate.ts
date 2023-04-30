import { Flight } from "./Flight"
import { DateTime } from "./Date/DateTime"
export class FlightDate{
    private flights:Flight[]=[]
    private date:DateTime
    constructor(flight:Flight){
        this.flights.push(flight)
    }
    getflight(flight:Flight){
        this.flights.push(flight)
    }
    
    


    
    
    
   
}

















