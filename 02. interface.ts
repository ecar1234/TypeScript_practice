
// interface 선언
interface LabeledValue {
    label: string;
}
// interface 사용
const printLabel = (labelObj:LabeledValue) => {
    console.log(labelObj.label);
}
let myObj = {size: 10, label:"hello"};

// Optional properties 
interface Exam {
    name?: string;
    age? : number;
}
let intro = (info: Exam): {name: string, realAge: number} => {
    let newIntro = {name: "mike", realAge: 24};
    if(info.name){
        newIntro.name = info.name;
    }
    if(info.age){
        newIntro.realAge = info.age + 1
    }
    return newIntro;
}
let myIntro = intro({name: "JK"});

// Excess property check1
let myIntro2 = intro({nickName: "john"} as Exam)
//Excess property check2
interface Exam2 {
    name?: string;
    age?: number;
    [propName: string] : any;
}
//Excess property check3
let examOption = ({nickName: "john", age:30});
let myIntro3 = (intro(examOption));

//readOnly
interface Read {
    readonly x: number;
    readonly y: number;
}
let read: Read = {x : 10, y : 15} 
    read.x = 5; // readonly 속성으로 값을 변경 할 수 없음.

//function type1
interface Search {
    (source: string, subString: string): boolean;
}
let mySearch: Search = (source: string, subString: string): boolean => {
    let result = source.search(subString)
    return result > -1;
}
//function type2
let mySearch2: Search = (src: string, sub:string) => {
    let result = src.search(sub);
    return result > -1;
}
//function type3
let mySearch3: Search = (src, sub) => {
    let result = src.search(sub);
    return result > -1;
}

//indexable types1
interface Animal {
    [index: number]: string;
}
let myAniArr: Animal = ["dog", "cat"];
let myAni: string = myAniArr[0];
//indexable types2(index 하위타입 사용)
interface Animal2 {
    [index: string]: string; // string 가 하위 타입
    dog: string;
    cow: number; // error : index의 타입의 하위 타입과 다름
}
//indexable types3(index 하위타입 사용)
interface Animal3 {
    [index: string]: string | number; // 하위타입을 추가해주면 
    dog: string;
    cow: number; // error 가 나지 않음.
}
//indexable types4(readonly 사용)
interface Animal4 {
   readonly [index: number]: string  // readonly 를 사용해 할당을 막을 수 있다.
}
let arrAni: Animal4 = ["bob", "juju"];
arrAni[2] = "can"; // error : index 할당을 readonly로 막아놔서 error.

//class type // 
// implements an interface
interface Clock {
    currentTime: Date;
    setTime(d: Date): void;
}
class NewClock implements Clock{
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// extends vs implements 
class ClaExtends {
   private state: any;
}
interface InterExtends extends ClaExtends {
    select(): void;
}
class Button extends ClaExtends implements InterExtends {
    select() {}
}