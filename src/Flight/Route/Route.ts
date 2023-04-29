export class Route{
    protected destination:string
    protected distance:number
    constructor(destination:string,distance:number){
        this.destination = destination;
        this.distance = distance;
    }
}