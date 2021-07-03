function solution(a, b) {
    let answer = 0;
    let max =a>b?a:b;
    let min =a<b?a:b;
    
    for(let i=min;i<=max;i++){
        answer+=i
    }
    return answer;
}
