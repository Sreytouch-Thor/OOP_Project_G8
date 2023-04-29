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
    public getFlightsOnDate(date: DateTime) {
        let flightsOnDate: Flight[] = [];
        for (let flight of this.flights) {
            if (flight.getDepartureDate().isEqual(date)) {
                flightsOnDate.push(flight);
            }
        }
        return flightsOnDate;
    }

    
    
    
   
}

















