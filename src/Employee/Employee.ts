
export abstract class Employee {
    protected name: string;
    protected salary: number = 0;
    constructor( 
        name: string,
        salary: number
        
    )
    {
        this.name = name
        this.salary = salary;
        
    };
    setName( name: string ){
        this.name = name;
    }
    getName(){
        return this.name;

    }
   
    setSalary(salary: number) {
        this.salary = salary;
    }
    
    getSalary():number{
        return this.salary;
    }

    
}