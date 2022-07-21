export default class Person {
    static numberOfPerson: number = 0;

    constructor(
        private readonly name: string, //생성자에서는 접근제한자를 무조건 써주기
        private readonly age: number,  //readonly 키워드도 따로 정리하기
        private readonly etc: boolean,
    ) {
        Person.numberOfPerson++;
    }

    printInfo(): void {
        console.log(`Person name: ${this.name}`);
        console.log(`Person age: ${this.age}`);
        console.log(`Person etc: ${this.etc}`);
    }

    static printNumberOfPerson(): void {
        console.log(`The Number Of Person Object: ${this.numberOfPerson}`);
    }
}

type MakePerson = (string, number, boolean?) => Person;

export const makePerson: MakePerson = (name: string, age: number, etc: boolean = false): Person => {
    return new Person(name, age, etc);
};


