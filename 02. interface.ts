
// interface 선언
interface LabeledValue {
    label: string;
}
// interface 사용
const printLabel = (labelObj:LabeledValue) => {
    console.log(labelObj.label);
}

// Optional properties 
interface Exam {
    name?: string;
    age? : number;
}

//readOnly
interface Read {
    readonly x: number;
    readonly y: number;
}

