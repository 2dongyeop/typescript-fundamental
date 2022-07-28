export const mergeObjects =
    <T, U>(a: T, b: U) => ({...a, ...b});
// // ...a 같은 경우를 전개 연산자라고 함
// const a = {
//     name: 'test',
//     age: 26
// };
// {
//     phoneNumber: '010-1231-1123',
//         ...a
// };
//     ---> 객체로 묶인 것을 풀어서 대입
// {
//     phoneNumber: '010-1231-1123',
//         name: 'test',
//     age: 26
// }
