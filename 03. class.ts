// class (instance, constructor, method)
class Greeter {
    greeting: string; // instance
    constructor(message: string) { // constructor
        this.greeting = message;
    }
    greet() { // method
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

// Inheritance (상속)
class NewAnimal1 {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends NewAnimal1 {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

// public, private, protected
// public 은 기본 default 값으로 노출시킬 멤버를 표시
// private : 동일 class 내에서만 접근이 가능/ 상속 시 동일한 private 멤버를 공유해야 하고, 그 외 외부에서 사용 할 수 없다.(가장 강력한 보호)
class NewAnimal2 {
    private name: string;
    constructor(theName: string) { this.name = theName; } // 생성자를 통하여 private에 접근
}
class Rhino extends NewAnimal2 {
    constructor() { super("Rhino"); } // 상속 시 생성자를 통하여 동일한 private를 공유
}
class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; } // 동일 class 내부에서 private 접근
}

let animal = new NewAnimal2("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
animal = employee; // 오류: 'Animal'과 'Employee'은 동일한 private를 공유하지 않기 때문에 'Employee' 에서 사용 할 수 없다.

// protected : private와 비슷한 기능을 하지만, 상속관계가 성립하고 하위 클래스에서 접근 가능
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}
class Employee1 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name); // super 를 통해 상위 클래스의 protected에 접근
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 오류 : 동일 클래스와 하위 클래스 에서만 사용이 가능 하기 때문에, 'howard'에서 바로 'Person' 으로 접근 할 수 없다.


// readonly : interface 의 readonly 와 동일하게 선언 된 이 후 외부에서 초기화 할 수 없다.


// Parameter property : parameter를 넣을 때 속성값을 선언하여 선언과 할당을 동시에 할 수 있다
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) { // parameter 선언 시 앞에 속성 값 추가.
    }
}

// Accessors (get, set) : private 멤버의 사용 시 get 으로 접근하고 set 으로 값을 초기화 할 수 있다. getter/setter 가 선언 되지 않으면 자동으로 readonly로 인식 한다.
// 보통 private 로 선언 되면 변수 앞에 _(언더바)를 사용 한다.

// static : 전역 멤버를 생성 할 수 있고, 호출 시 클래스 이름으로 호출이 가능하다. 하지만, 인스턴스화 시켜서 접근 할 수 없다.
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}
let grid1 = new Grid(1.0);
console.log(Grid.origin) // 전역 멤버로 클래스 이름으로 접근 가능
console.log(grid1.calculateDistanceFromOrigin) // 인스턴스화 하여 메소드에 접근 가능
console.log(grid1.origin) // 인스턴스화 하여 접근 할 수 없음

// Abstract : abstract 로 선언 된  클래스는 인스턴스화 시킬 수 없고, 하나 이상의 abstract method 를 포함 하여야 한다. interface 와 다르게 멤버의 구현 세부정보를 포함 할 수 있다.
// Abstract method : interface 의 property와 같이 이름과 타입만 선언 하면 된다. abstract class 에서 파생 된 클래스에서는 반드시 abstract method 를 구현해야 한다!!
abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // 반드시 파생된 클래스에서 구현되어야 한다.
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // 파생된 클래스의 생성자는 반드시 super()를 호출해야 한다.
    }
    printMeeting(): void {  // 파생 클래스에서 반드시 abstract method 를 구현 해야 한다.
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // 추상 타입의 레퍼런스를 생성합니다
department = new Department(); // 오류: 추상 클래스는 인스턴스화 할 수 없다.
department = new AccountingDepartment(); // 그래서 추상이 아닌 하위 클래스를 생성하고 할당 한다.

// Advanced
// Constructor functions

// Using a class as an interface