class Employee{

    constructor(
        private _empName : string,
        private _empAge : number,
        private _empJob : string
    ){
        
    }

    get empName(){
        return this._empName;
    }

    set empName(val : string){
        this._empName = val;
    }

    printEmp = ()  : void =>{
        console.log(`${this._empName}의 나이는 ${this._empAge}이고 직업은 ${this._empJob}입니다.`);
    }
}

let employee1 = new Employee('홍길동', 20, '개발자');
employee1.empName = '김길동';
employee1.printEmp();