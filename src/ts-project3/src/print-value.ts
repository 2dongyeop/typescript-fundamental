import {IValuable} from "./valuable";


//java와 마찬가지로 제네릭으로 정의된 것을 사용을 할 경우에는 맨 앞에 <> 호출 필수
export const printValue = <T>(v: IValuable<T>): void =>
    console.log(v.value);