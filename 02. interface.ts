
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

// Excess property check
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

// functional type
