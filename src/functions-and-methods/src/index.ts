import {printHello} from "./print.hello";
import {printUser} from "./print.user";
import {makePerson} from "./person";
import {init} from "./init";

printHello();
printUser('Dongvelop', 24);

const person = makePerson('Dongvelop', 24);
person.printinfo();

init(() => console.log('custom initialization finished'));