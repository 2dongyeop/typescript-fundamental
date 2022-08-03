function solution(numbers) {
    const answer: string[] = numbers.map(String)
        .sort((a, b) => (b + a) - (a + b))
        .join('')

    //큰 순서대로 정렬했는데 가장 앞에가 0일 경우
    //주어진 numbers가 [0, 0, 0, ...]이므로 000..이 아닌 0을 출력
    return answer[0] === '0' ? '0' : answer
}