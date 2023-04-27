import { Flight } from "./Flight/Flight";
import { Passenger } from "./Flight/Passenger/Passenger";
import { Aeroplan } from "./Aeroplan/Aeroplan";
export class Airport {
    private departurArea:string;
    private name :string;
    private logcation:string;
   
   
  
    constructor(departurArea:string,name:string,location:string)
    {
        this.departurArea= departurArea;
        this.name= name;
        this.logcation = location;
        
    }
    

}
