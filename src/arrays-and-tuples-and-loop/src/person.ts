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

type MakePerson = (arg0: string, arg1: number, arg2?: boolean) => Person;

class MakePersonData {
    private _name: string;
    age: number;
    etc: boolean;

    public get name(): string {
        return this._name;
    }
    // 아래와 같이 setter는 당연히 readonly가 없어야 함
    public set name(name: string) {
        this._name = name;
    }
}

// 아래 (personData: MakePersonData) => Person 을 MakePerson을 바꿔도 작동 됨
export const makePerson: (personData: MakePersonData) => Person = (personData: MakePersonData): Person => {
    console.log(personData.name); //_name으로 선언을 해놓았지만 getter 메소드를 통해 호출 가능

    return new Person(personData.name, personData.age, personData.etc);
}; //매개변수에 readonly를 붙이려면 매개변수용 클래스를 하나 만들어준다? - 제네릭을 이용!!