
export abstract class Employee {
    protected name: string;
    protected gender:string
    protected salary: number = 0;
    constructor( 
        name: string,
        gender:string,
        salary: number
        
    )
    {
        this.name = name
       
        this.gender = gender
        this.salary = salary;
        
    };
    setName( name: string ){
        this.name = name;
    }
    getName(){
        return this.name;

    }
    setGender( gender: string ){
        this.gender = gender;
    }
    getGender(){
        return this.gender;

    }
    setSalary(salary: number) {
        this.salary = salary;
    }
    
    getSalary():number {
        return this.salary;
    }
    


    
}