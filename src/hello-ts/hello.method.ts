import {IPerson} from "./user";

export function helloMessage(message: string): void { //익명 인터페이스
    console.log(`Hello ${message}`);
}

export function helloUser(user: IPerson): void {
    user.sayName();
    user.sayAge();
}