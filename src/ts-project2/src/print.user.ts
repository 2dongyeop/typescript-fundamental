//타입 별칭 alias
type PrintUserFunc = (string, number) => void;

type StringNumberType = string | number;
//위는 극단적 예시이고, 주로 number랑 undefined일 때는 간혹 있음

export const printUser: PrintUserFunc =
    function (name: StringNumberType, age: number): void {
        console.log(`User's name: ${name}`);
        console.log(`User's age: ${age}`);
    }; //함수 본문