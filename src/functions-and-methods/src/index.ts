import {printHello} from "./print.hello";
import {printUser} from "./print.user";
import {makePerson, printPerson} from "./person";

printHello();
printUser('Dongvelop', 24);

const person = makePerson('Dongvelop', 24);
printPerson(person);
