export interface IPerson {
    sayName(): void;
    sayAge(): void;
}

export class Person implements IPerson{
    static numberOfPerson: number = 0;

    constructor(public name :string, public age: number) {
        Person.numberOfPerson++;
        // this.name = name;  //필수가 아님 없어도 파라미터를 통해서 알아서 입력됨
        // this.age = age;    //필수가 아님 없어도 파라미터를 통해서 알아서 입력됨
    }

    sayName(): void {
        console.log(`My name is ${this.name}`);
    }

    sayAge(): void {
        console.log(`My age is ${this.age}`);
    }
}

const user: Person = new Person("dongvelop", 24);

export default user;
