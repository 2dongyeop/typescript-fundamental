import {occurErrorMethod} from "./occur-error.method";
import {printValue} from "./print-value";
import {IValuable, Valuable} from "./valuable";
import {parseNumber} from "./parse-number";
import {mergeObjects} from "./merge-objects";
import {ICicle, IRectangle, ISquare} from "./shape";
import {calculatorArea} from "./calculator-area";
import Bird from "./bird";
import Fish from "./fish";
import {flyOrSwim} from "./fly-or-swim";
import * as Buffer from "buffer";
import {readFile, readFileSync} from "fs";
import {readFilePromise} from "./read-file.promise";
//
// try {
//     //에러가 발생할 수도 있는 부분
//     occurErrorMethod();
// } catch (e) {
//     //에러가 처리되는 부분
//     console.error(e.message);
// } finally {
//     //항상 실행되는 부분
//     console.log('finally문은 무조건 실행~');
// }
//
// printValue(new Valuable<number>(1));
// printValue(new Valuable<boolean>(true));
// printValue(new Valuable<string>('hello'));
// printValue(new Valuable<number[]>([1, 2, 3]));
//
// parseNumber<string, IValuable<string>>(new Valuable<string>('123'));
//
// type INameable = {
//     name: string
// };
//
// type IAgeable = { //interface로 선언해도 동작은 됩니다.
//     age: number
// };
//
// const objectWithNameAndAge: INameable & IAgeable = mergeObjects(
//     {name: 'dongvelop'}, {age: 24}
// );
//
// console.log(objectWithNameAndAge);
//
// const square: ISquare = {tag: 'square', side: 10};
// const rectangle: IRectangle = {tag: 'rectangle', width: 4, height: 5};
// const circle: ICicle = {tag: 'circle', radius: 10};
//
// console.log(
//     calculatorArea(square),
//     calculatorArea(rectangle),
//     calculatorArea(circle),
// );
//
// const bird: Bird = new Bird();
// const fish: Fish = new Fish();
//
// flyOrSwim(bird);
// flyOrSwim(fish);
//
// console.log(`파일을 비동기식으로 읽는중..`);
// readFile('./package.json', (error: Error, buffer: Buffer) => {
//    if (error) {
//        console.log(error);
//    } else {
//        console.log('비동기식 어쩌구..~');
//        console.log(buffer.toString());
//    }
// });
//
// console.log(`파일을 동기식으로 읽는중..`);
// const buffer: Buffer = readFileSync('./package.json');
// console.log(buffer.toString());
//
// readFilePromise('./package.json')
//     .then((value:string) => { //resolve
//         console.log(value);
//         return readFilePromise('./tsconfig.json');
//     })
//     .then((value:string) => {
//         console.log('print tsconfig.json')
//         console.log(value);
//     })
//     .catch((error) => { //reject
//         console.log(error);
//     });

const asyncFunction = async (): Promise<void> => {
    const result = await readFilePromise('./package.json');
    console.log('Success');
    console.log(result);
};

asyncFunction();