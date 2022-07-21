import {printHello} from "./print.hello";
import {printUser} from "./print.user";
import Person, {makePerson} from "./person";
import {init} from "./init";

printHello();
printUser('Dongvelop', 24);

const person = makePerson('Dongvelop', 24);
person.printInfo();
Person.printNumberOfPerson();


init(() => console.log('custom initialization finished'));

const numbers: number[] = [1, 2, 3];
const strings: string[] = ['one', 'two', 'three'];
const people: Person[] = [
    makePerson('test', 24, true),
    makePerson('test2', 29)
];
console.log(Array.isArray(people));

for (const index in numbers) {
    console.log(`[${index}] : ${numbers[index]}`);
}

for (const property in person) {
    console.log(`property: ${property}`);
    console.log(`-> ${person[property]}`);
}

console.log(person['printInfo']);

for (const person of people) {
    person.printInfo();
}