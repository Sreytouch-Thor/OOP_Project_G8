import { Flight } from "../Flight";

export class BookingFlight {
    private flight:Flight
  
    getFlight(flight:Flight)
    {
        this.flight= flight
    }
}