import {printHello} from "./print.hello";
import {printUser} from "./print.user";
import {makePerson} from "./person";

printHello();
printUser('Dongvelop', 24);

const person = makePerson('Dongvelop', 24);
console.log(person);