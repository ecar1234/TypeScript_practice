// function type
    function add(x: number, y: number): number { // 선언식: 각 인자에 타입을 선언하고 모든 인자의 반환 타입을 선언 할 수 있다.
        return x + y;
    }
    let myAdd = function(x: number, y: number): number { // 표현식: 그래서 선언 반환타입을 보고 반환 될 값의 타입을 파악 할 수 있다.
        return x + y; 
    };
    let myAdd2: (x: number, y: number) => number = // 표현식의 반환 타입 선언 '=>' 
        function(x: number, y: number): number { 
            return x + y; 
        };
    let myAdd3: (base: number, increment: number) => number = // 변수의 타입이 함수의 타입과 일치하면 매개변수의 이름은 달라도 된다.(arrow function 도 사용가능)
        (x: number, y: number): number => { 
            return x + y; 
        };
// return 값에 타입을 선언 하지 않는 이유는 tsc 가 선언 된 타입을 추론하여 알아낼 수 있기 때문이다.
    let myAdd4: (baseValue: number, increment: number) => number =
        function(x, y) {  // 위 에서 선언된 타을으로 타입을 추론하여 자동으로 정의 된다.
            return x + y; 
        };    

// Optional and Default Parameter
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

let build1 = buildName("Bob");                  // 오류, 너무 적은 매개변수
let build2 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let build3 = buildName("Bob", "Adams");         // Ts 에서는 Js와 달리 선언된 매개변수를 모두 사용하여야 한다. 많거나 적으면 error가 발생한다.

// Optional parameter : 위의 error 를 방지하기 위해서 매개변수를 선택적으로 사용 할 수 있도록 정의 할 수 있다.
function buildName1(firstName: string, lastName?: string) { // 두 번째 매개변수를 선택적 변수로 설정 '?' / 선택적 변수는 필수 변수 선언 후 뒤에 작성되어야 한다!!
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}

let build1_1 = buildName1("Bob");                  // 선택적 변수이기 때문에 없어도 작동한다.
let build2_1 = buildName1("Bob", "Adams", "Sr.");  // 오류 : 여전히 초과되는 매개변수는 error
let build3_1 = buildName1("Bob", "Adams");         

// Default Initialization Parameter (기본 초기화 매개변수) : 매개변수의 타입을 default 값으로 선언 할 수 있다. / 필수 변수와 상관없이 선언이 가능하다.
function buildName2(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let build1_2 = buildName2("Bob");                  // 올바르게 동작, "Bob Smith" 반환
let build2_2 = buildName2("Bob", undefined);       // 여전히 동작, 역시 "Bob Smith" 반환 / 인자가 undefined 이지만 default 값이 있기 때문에 정상 작동
let build2_3 = buildName2("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let build2_4 = buildName2("Bob", "Adams"); 

// Rest Parameters : 위에서 지속적으로 초과되는 매개변수에 대한 error를 해결 할 수 있는 방법으로 spread syntax 를 사용 하여 해결 할 수 있다.
function buildName3(firstName: string, ...restOfName: string[]) {  // spread syntax 사용하여 들어오는 모든 매개변수를 수용 할 수 있다.
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie"); // 매개변수를 나열해도 되고
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName3; // spread syntax 를 사용하여 표현식을 사용 할 수 있다.

// this and overload