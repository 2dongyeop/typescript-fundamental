function solution(numbers) {
    let answer = ''; //아래에서 바뀌므로 let으로 선언

    const stringNumbers: string[] = new String[numbers.length];

    for (const index in numbers) {
        stringNumbers[index] = numbers[index].toString();
    }

    stringNumbers.sort();


    for (const str in stringNumbers) {
        answer += str;
    }

    if (stringNumbers[0] == "0") {
        return "0";
    }

    return answer;
}