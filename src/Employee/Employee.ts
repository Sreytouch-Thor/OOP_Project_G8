
export abstract class Employee {
    protected name: string;
    protected salary: number = 0;
    protected gender:string
    constructor( 
        name: string,
        gender:string,
        
    )
    {
        this.name = name
       
        this.gender = gender
        
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
    
    getSalary() {
        return this.salary;
    }

    
}