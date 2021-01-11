// 기본타입의 선언 

// string type
let str:string = "hello"
const strFC = (str):string => {
   return `${str}`;
};

//number type
let num: number = 34;
const numFC = (num):number => {
   return num;
};

//boolean type
let bool:boolean = true;
const boolFC = (bool):boolean => {
   return true || false;
};

//array type1
let arr: number[] = [1, 2, 3, 4, 5];
const arrFC = (arr): number[] => {
   return arr;
};
//array type2(generics)
let arr2: Array<number> = [1, 2, 3, 4, 5];
const arrFC2 = (arr2): Array<number> => {
   return arr2;
};

// null or undefined type
let n: null = null;
let u: undefined = undefined;

//Tuple
let tup: [string, number, boolean, number[]] = ['hello', 34, true, [1, 2 , 3]];

//Enum(열거)
enum Color{red, green, blue};
let newColor: Color = Color.red
// Enum 번호 지정(자동)
enum Color2{red = 1, green, blue};
let colorName = Color2[2] // green
//Enum 번호 지정(수동)
enum Color3{red = 2, green = 3, blue = 5};

//Any
let exam: any = "hello";
exam = 24;
exam = true;
exam = [1,2,3]
exam = ["hello", true, 30, [1,2,3], {name: "JK", age: 25}]

//object type
const obj = (o:object) => {
    return {props : 0};
}

//never
const value = (massege:string):never => {
    throw new Error(massege);
}

//type assertions 
let strLength: number = (<string>str).length;
//type assertions (using alias)
let strLength2: number = (str as string).length;
